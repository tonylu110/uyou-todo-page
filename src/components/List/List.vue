<template>
  <div className='list'>
    <AddItem 
      v-if="showAddItem" 
      @showAddItem="setShowAddItem"
      @addItem="addItem"
    />
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
import { ref, watchEffect } from 'vue';
import Item from './Item/Item.vue';
import firstLoad from '../../util/firstLoad';
import LocalStorage from '../../util/localStorage';
import IToDoListData from '../../interface/IToDoListData'
import AddItem from './AddItem/AddItem.vue';
import ITodoList from '../../interface/ITodoListArray';

firstLoad()

const list = ref(LocalStorage('get'))

const props = defineProps({
  showAddItem: {
    default: false,
    type: Boolean
  }
})

const emits = defineEmits<{
  (e: 'setShowAddItem'): void
}>()

const setShowAddItem = () => {
  emits('setShowAddItem')
}

const setOk = (id: number, isOk: boolean) => {
  for (let i = 0; i < list.value!.length; i++) {
    if (list.value![i].id === id) {
      list.value![i].ok = isOk
    }
  }
  const localStorageSetTodoList: IToDoListData = {
    data: list.value!
  }
  LocalStorage('set', localStorageSetTodoList)
}

const addItem = (id: number, text: string) => {
  emits('setShowAddItem')
  const item: ITodoList = {
    text: text,
    id: id,
    ok: false
  }
  list.value!.unshift(item)
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