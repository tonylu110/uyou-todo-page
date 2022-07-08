<template>
  <div class="list-main">
    <TabBar 
      title="设置" 
      :leftImgShow="false"
      rightImg="/images/close.png"
      @rightClick="() => emits('showSetting')"
    />
    <SettingList />
  </div>
</template>

<script setup lang="ts">
import TabBar from '../components/TabBar/TabBar.vue';
import SettingList from '../components/SettingList/SettingList.vue';

const emits = defineEmits<{
  (e: 'showSetting'): void
}>()
</script>

<style scoped>
.list-main {
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 10px #594b4270;
  border-radius: 7px;
  margin-right: 70px;
}
</style>