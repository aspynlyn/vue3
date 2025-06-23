<script setup>
import FrontWheel from '@/components/FrontWheel.vue';
import RearWheel from '@/components/RearWheel.vue';
import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore();
</script>

<template>
  <h1>Hello Vue!</h1>
  <button @click="counterStore.increment">회전</button>
  <FrontWheel></FrontWheel>
  <RearWheel></RearWheel>

  <div class="car">
    <FrontWheel />
    <RearWheel />
  </div>
</template>

<style scoped>
.car {
  display: flex;
  gap: 10px;
}
</style>
