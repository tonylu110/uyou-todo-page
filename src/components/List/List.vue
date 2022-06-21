<template>
  <div className='list'>
    <Item />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Item from './Item/Item.vue';
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
  border-radius: 0 0 5px 5px;
  padding-top: 10px;
}
</style>