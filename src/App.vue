<script setup lang="ts">
import { onMounted } from 'vue';
import Home from './pages/home.vue';

onMounted(() => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    window.location.href = 'https://m.todo.uyou.org.cn';
  }
})
</script>

<template>
  <Home />
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
</style>
