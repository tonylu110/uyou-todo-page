<template>
  <div class="add">
    <div class="add-time-area">
      <span>{{ moment(todoTime).format('hh:mm A') }}</span>
      <div class="buttons">
        <div class="ok-button" 
          :style="{opacity: showAddButton}"
          @click="addItem"
        >{{ i18n().addText }}</div>
        <div class="cancel-button" @click="showAddItem">{{ i18n().cancelText }}</div>
      </div>
    </div>
    <textarea class="add-item-text" rows="4" v-model="text"></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import moment from 'moment';
import i18n from '../../../i18n';

const todoTime = new Date().getTime()

const text = ref('')
const showAddButton = ref('')

watchEffect(() => {
  if (text.value !== '') {
    showAddButton.value = '1'
  } else {
    showAddButton.value = ''
  }
})

const emits = defineEmits<{
  (e: 'showAddItem'): void,
  (e: 'addItem', id: number, text: string): void
}>()

const showAddItem = () => {
  emits('showAddItem')
}

const addItem = () => [
  emits('addItem', todoTime, text.value)
]
</script>

<style scoped lang="scss">
@import './style.scss';
</style>