<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TabBar from './components/TabBar/TabBar.vue';
import List from './components/List/List.vue';

const showAddItem = ref(false)

onMounted(() => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    window.location.href = 'https://m.todo.uyou.org.cn';
  }
})

const onAddClick = () => {
  showAddItem.value = true
}

const setShowAddItem = () => {
  showAddItem.value = false
}
</script>

<template>
  <div class="list-main">
    <TabBar
      @onAddClick="onAddClick" 
    />
    <List
      :showAddItem="showAddItem" 
      @setShowAddItem="setShowAddItem"
    />
  </div>
</template>

<style>
::-webkit-scrollbar {
    display: none;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.list-main {
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 10px #594b4270;
  border-radius: 7px;
}
</style>
