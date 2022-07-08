<template>
  <div class="list-main">
    <TabBar
      @rightClick="onAddClick" 
      @leftClick="() => emits('showSetting')"
    />
    <List
      :showAddItem="showAddItem" 
      @setShowAddItem="setShowAddItem"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TabBar from '../components/TabBar/TabBar.vue';
import List from '../components/List/List.vue';

const showAddItem = ref(false)

const emits = defineEmits<{
  (e: 'showSetting'): void
}>()

const onAddClick = () => {
  showAddItem.value = true
}

const setShowAddItem = () => {
  showAddItem.value = false
}
</script>

<style scoped>
.list-main {
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 10px #594b4270;
  border-radius: 7px;
}
</style>
