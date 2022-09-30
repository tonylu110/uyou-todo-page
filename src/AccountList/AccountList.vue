<template>
  <div class="list">
    <Item 
      :showArrow="false"
      title="未登录"
    />
  </div>
</template>

<script setup lang="ts">
import Item from '../components/ItemBox/Item/Item.vue';

</script>

<style scoped lang="scss">
.list {
  background-color: #eee;
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