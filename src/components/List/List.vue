<template>
  <div className='list'>
    <Item 
      v-for="(item, index) in list" 
      :key="index"
      :time="item.id"
      :text="item.text" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Item from './Item/Item.vue';
import firstLoad from '../../util/firstLoad';
import LocalStorage from '../../util/localStorage';

firstLoad()

const list = ref(LocalStorage('get'))
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