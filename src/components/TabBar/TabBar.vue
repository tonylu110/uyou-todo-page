<template>
  <div class="title-bar">
    <div class="left" v-if="leftImgShow" @click="leftClick">
      <span class="material-icons">settings</span>
    </div>
    <span>{{ title }}</span>
    <div class="right" v-if="rightImgShow" @click="rightClick">
      <span class="material-icons">{{ rightImg }}</span>
    </div>
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
  rightImg: {
    default: 'add_circle_outline',
    type: String
  },
  title: {
    default: 'uyou ToDo',
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

  div {
    position: absolute;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &.right {
      right: 10px;
      width: 22px;
      height: 22px;
      padding: 4px;
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