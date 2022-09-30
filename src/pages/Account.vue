<template>
  <div class="list-main">
    <TabBar 
      title="账号" 
      :leftImgShow="false"
      rightImg="close"
      @rightClick="router.back()"
    />
    <AccountList />
  </div>
</template>

<script setup lang="ts">
import TabBar from '../components/TabBar/TabBar.vue';
import { useRouter } from 'vue-router';
import AccountList from '../AccountList/AccountList.vue';

const router = useRouter()
</script>

<style scoped>
.list-main {
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 10px #594b4270;
  border-radius: 7px;
}
</style>