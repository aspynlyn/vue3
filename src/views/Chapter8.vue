<script setup>
import { onMounted, onUpdated, onUnmounted, reactive } from 'vue';

onMounted(() => {
  console.log('컴포넌트가 마운트 됐다');
});

const state = reactive({
  message: 'Hello',
});
onUpdated(() => {
  console.log('속성값이 변경되었다면', state.message);
});

onUnmounted(() => {
  alert('ㅃ');
})
</script>

<template>
  <h1>Chapter8.vue</h1>
  <div>{{ state.message }}</div>
  <div>
    <input type="text" v-model="state.message" />
  </div>
</template>

<style scoped></style>
