<script setup>
import { ref } from 'vue';

const fruits = 'apple avocado';
const fruitArr = ['banana', 'blueberry'];

const visible = ref({ fruit: true });
const hidden = { fruit: false };

const changeVisible = () => {
  console.log(visible.fruit);
  visible.value.fruit = !visible.value.fruit;
};

const rect = 'background-color: slategray; width: 200px; height: 100px;';
const rectObj = {
  backgroundColor: 'steelblue',
  width: '200px',
  height: '100px',
  marginTop: '10px',
};
rectObj.backgroundColor = 'slategray';

let loading = true;
</script>

<template>
  <h1>Chapter3.vue</h1>
  <div :class="fruits">사과 / 아보카도</div>
  <div :class="fruitArr" :title="fruitArr">바나나 / 블루베리</div>
  <hr />
  <div :class="visible" class="pointer" @click="changeVisible">
    사과 {{ visible.fruit }}
  </div>
  <div :class="hidden">오이</div>
  <div :style="rect">rect</div>
  <div :style="rectObj">rectObj</div>

  <div v-if="loading">
    <div>로딩 중</div>
  </div>
  <div v-else>로딩 완</div>
  <!-- if랑 else는 인접형제여야 같은 분기문으로 인정됨 -->

  <div v-show="loading">show loading</div>
  <!-- v-if는 조건이 안맞으면 문서에서 아예 태그가 빠져버리고 v-show는 조건이 안맞으면 display:none처리를 해서 태그는 남아있음 -->
</template>

<style scoped>
.fruit {
  color: red;
}
</style>
