<template>
  <div className='list'>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>

<style scoped>
.list {
  background-color: #edd9b7;
  width: 100%;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  box-shadow: 0 3px 5px #594b4270;
  border-radius: 0 0 5px 5px;
}
</style>