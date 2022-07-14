<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Home from './pages/Home.vue';
import Setting from './pages/Setting.vue';

onMounted(() => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    window.location.href = 'https://m.todo.uyou.org.cn';
  }
})

const SettingShow = ref(false)
</script>

<template>
  <Setting
    v-if="SettingShow"
    @showSetting="() => SettingShow = !SettingShow"
  />
  <Home
    @showSetting="() => SettingShow = !SettingShow" 
  />
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
    position: fixed;
    top: 50px;
}
</style>
