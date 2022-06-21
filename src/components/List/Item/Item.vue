<template>
  <div>
    <div class="list-item">
      <div class="time-area">
        <span>{{ getTime(time as number) }}</span>
        <div>复制</div>
      </div>
      <span class="item-text">
        {{ text }}
      </span>
      <div class="close-button">
        <img src="/images/close.png" alt="" />
      </div>
      <div class="ok-button">
        <img src="/images/ok.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import getTime from '../../../util/getTime';

const props = defineProps({
  time: Number,
  text: String,
})
</script>

<style scoped lang="scss">
@import './style.scss';
</style>