<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    window.location.href = 'https://m.todo.uyou.org.cn';
  }
})

</script>

<template>
  <RouterView></RouterView>
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

.black-back {
    background-color: #00000030;
    height: 550px;
    width: 300px;
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    margin-top: 25px;
}
</style>
