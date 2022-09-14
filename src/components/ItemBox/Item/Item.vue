<template>
  <div 
    class="item" 
    :style="showSwitch ? {backgroundColor: 'white', color: 'black', cursor: 'auto'} : ''"
    @click="emits('itemFun')"
  >
    <span>{{ title }}</span>
    <span v-if="showArrow && !showSwitch" class="material-icons">arrow_forward_ios</span>
    <Switch 
      v-if="showSwitch"
      :swichState="switchState"
      @switch="emits('switchFun')"
    />
  </div>
</template>

<script setup lang="ts">
import Switch from '../../Switch/Switch.vue'

defineProps({
  title: {
    default: 'title',
    type: String
  },
  showArrow: {
    default: true,
    type: Boolean
  },
  showSwitch: {
    default: false,
    type: Boolean
  },
  switchState: Boolean
})

const emits = defineEmits<{
  (e: 'switchFun'): void,
  (e: 'itemFun'): void
}>()
</script>

<style scoped lang="scss">
.item {
  position: relative;
  width: 250px;
  height: 30px;
  padding: 10px 15px;
  min-height: 30px;
  border-radius: 7px;
  box-shadow: 0 2px 10px #00000030;
  background-color: white;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;

  &:active {
    background-color: #5985eb;
    color: white;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 25px;
      height: 25px;
      margin-right: 22.5px;
      margin-left: -2.5px;
    }
  }
  
  .img-back {
    height: 50px;
    width: 50px;
    background-color: #00000005;
    z-index: 0;
    position: absolute;
    left: 0;
    border-right: 1px solid #00000010;
  }

  &:active .img-back {
    background-color: transparent;
    border: none;
  }

  .material-icons {
    font-size: 18px;
  }
}
</style>