<script setup>
import { getItems } from '@/services/itemService';
import { onMounted } from 'vue';

onMounted(async () => {
  const res = await getItems();
  console.log(res.data);
});
</script>
<!-- 이 화면이 마운트될 때 딱 한번 getItems 통신하고 
 통신으로 받아온 데이터를 콘솔에 나타내시오 -->

<template>
  <div class="container">
    <h1 class="mt-5">HELLO, HOME</h1>
  </div>
</template>

<style scoped></style>
