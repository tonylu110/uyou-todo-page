<template>
  <div class="title-bar">
    <img class="left" v-if="leftImgShow" :src="leftImg" alt="" @click="leftClick">
    <span>uyou ToDo</span>
    <img class="right" v-if="rightImgShow" src="/images/plus.png" alt="" @click="rightClick" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  leftImgShow: {
    default: true,
    type: Boolean
  },
  rightImgShow: {
    default: true,
    type: Boolean
  },
  leftImg: {
    default: '/images/setting.png',
    type: String
  }
})

const emits = defineEmits<{
  (e: 'rightClick'): void,
  (e: 'leftClick'): void
}>()

const rightClick = () => {
  emits('rightClick')
}

const leftClick = () => {
  emits('leftClick')
}
</script>

<style scoped lang="scss">
.title-bar {
  position: relative;
  height: 50px;
  width: 300px;
  background-color: #7a695c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 5px #594b4270;
  z-index: 10;
  border-radius: 7px 7px 0 0;

  span {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }

  img {
    position: absolute;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;

    &.right {
      right: 10px;
    }

    &.left {
      left: 10px;
      width: 22px;
      height: 22px;
      padding: 4px;
    }

    &:hover {
      background-color: #00000010;
    }

    &:active {
      background-color: #00000020;
    }
  }
}
</style>