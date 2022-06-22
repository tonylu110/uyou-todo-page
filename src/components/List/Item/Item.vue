<template>
  <div>
    <div class="list-item">
      <div class="time-area">
        <span>{{ getTime(time as number) }}</span>
        <div>复制</div>
      </div>
      <span class="item-text" :style="okStyle">
        {{ text }}
      </span>
      <div class="close-button">
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

const okState = ref(false)
const okStyle = ref({})

const props = defineProps({
  time: Number,
  text: String,
})

const setOk = () => {
  okState.value = !okState.value
  okStyle.value = getOkStyle(okState.value)
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>