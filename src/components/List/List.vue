<template>
  <div class='list'>
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
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Item from './Item/Item.vue';
import firstLoad from '../../util/firstLoad';
import LocalStorage from '../../util/localStorage';
import AddItem from './AddItem/AddItem.vue';
import ITodoList from '../../interface/ITodoListArray';
import saveItemSet from './saveItemSet'

firstLoad()

const list = ref(LocalStorage('get'))

defineProps({
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
  saveItemSet(list.value!)
}

const addItem = (id: number, text: string) => {
  emits('setShowAddItem')
  const item: ITodoList = {
    text: text,
    id: id,
    ok: false
  }
  list.value!.unshift(item)
  saveItemSet(list.value!)
}

const deleteItem = (id: number) => {
  for (let i = 0; i < list.value!.length; i++) {
    if (list.value![i].id === id) {
      list.value!.splice(i, 1)
    }
  }
  saveItemSet(list.value!)
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