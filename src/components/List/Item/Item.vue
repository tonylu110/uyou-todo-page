<template>
  <div class="list-item">
    <div class="time-area">
      <span>{{ getTime(time as number) }}</span>
      <div @click="copyText">{{ i18n().copyText }}</div>
    </div>
    <span class="item-text" :style="okStyle">
      {{ text }}
    </span>
    <div class="close-button" @click="deleteItem">
      <span class="material-icons">close</span>
    </div>
    <div class="ok-button" @click="setOk">
      <span class="material-icons">check</span>
    </div>
    <Toast
      v-if="showToast"
      :msg="i18n().copyToast" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import getTime from '../../../util/getTime';
import getOkStyle from '../../../data/getOkStyle'
import i18n from '../../../i18n';
import Toast from '../../Toast/Toast.vue';

const props = defineProps({
  time: Number,
  text: String,
  isOk: Boolean
})

const okState = ref(props.isOk)
const okStyle = ref(getOkStyle(okState.value))

watchEffect(() => {
  okState.value = props.isOk
  okStyle.value = getOkStyle(props.isOk)
})

const emits = defineEmits<{
  (e: 'setOK', id: number, isOk: boolean): void,
  (e: 'deleteItem', id: number): void
}>()

const setOk = () => {
  okState.value = !okState.value
  okStyle.value = getOkStyle(okState.value)
  emits('setOK', props.time!, okState.value)
}

const deleteItem = () => {
  emits('deleteItem', props.time!)
}

const showToast = ref(false)

const copyText = () => {
  navigator.clipboard.writeText(props.text!).then(() => {
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 1000)
  })
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>