<script setup lang="ts">
import TabBar from './components/TabBar/TabBar.vue';
import List from './components/List/List.vue';
</script>

<template>
  <div class="list-main">
    <TabBar />
    <List />
  </div>
</template>

<style>
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
}

.list-main {
  display: flex;
  flex-direction: column;
}
</style>
