<template>
  <div className='list'>
    <Item 
      v-for="(item, index) in list" 
      :key="index" 
      :time="item.id" 
      :text="item.text" 
      :isOk="item.ok"
      @setOK="setOk"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Item from './Item/Item.vue';
import firstLoad from '../../util/firstLoad';
import LocalStorage from '../../util/localStorage';
import ITodoList from '../../interface/ITodoListArray'
import IToDoListData from '../../interface/IToDoListData'

firstLoad()

const list = ref(LocalStorage('get'))

const setOk = (id: number, isOk: boolean) => {
  let listData: ITodoList[] = list.value!
  for (let i = 0; i < listData.length; i++) {
    if (list.value[i].id === id) {
      list.value[i].ok = isOk
    }
  }
  const localStorageSetTodoList: IToDoListData = {
    data: list.value!
  }
  LocalStorage('set', localStorageSetTodoList)
}
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