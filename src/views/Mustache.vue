<script setup>
const message = 'There 1';
const messageObj = { name: 'Kim', age: 20 };
console.log(messageObj);
console.log(messageObj.toString());
</script>

<template>
  <h1>Mustacheㅎㅎ.vue</h1>
  <div>
    Hello, <span>{{ message }}</span>
  </div>
  <!-- v-text는 directive'디렉티브'라고 부름 v-로 시작하는 속성은 전부 디렉티브 -->
  <div>Hello, <span v-text="message"></span></div>
  <div>Hello, messageObj <span v-text="messageObj"></span></div>
  <div>Hello, messageObj.name <span v-text="messageObj.name"></span></div>
</template>

<style scoped></style>
