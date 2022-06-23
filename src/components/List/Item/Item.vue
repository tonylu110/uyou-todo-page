<template>
  <div>
    <div class="list-item">
      <div class="time-area">
        <span>{{ getTime(time as number) }}</span>
        <div>{{ i18n().copyText }}</div>
      </div>
      <span class="item-text" :style="okStyle">
        {{ text }}
      </span>
      <div class="close-button" @click="deleteItem">
        <img src="/images/close.png" alt="" />
      </div>
      <div class="ok-button" @click="setOk">
        <img src="/images/ok.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import getTime from '../../../util/getTime';
import getOkStyle from '../../../data/getOkStyle'
import i18n from '../../../i18n';

const props = defineProps({
  time: Number,
  text: String,
  isOk: Boolean
})

const okState = ref(props.isOk)
const okStyle = ref(getOkStyle(okState.value))

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
</script>

<style scoped lang="scss">
@import './style.scss';
</style>