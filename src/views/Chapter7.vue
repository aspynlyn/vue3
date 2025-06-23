<script setup>
import { reactive } from 'vue';
const state = reactive({
  player: 'Kim',
});

const state2 = reactive({
  form: {
    id: '',
    pw: '',
  },
});

const login = () => {
  alert(state.form.id + '님 환영합니다!');
}
</script>

<template>
  <h1>Chapter7.vue</h1>
  <h1>{{ state.player }}</h1>
  <div>
    <input type="text" v-model="state.player" />
    <!-- 양방향 데이터 바인딩 -->
    <input type="text" :value="state.player" />
    <!-- 단방향 데이터 바인딩 -->
  </div>
  <form @submit.prevent="login">
    {{ state2.form.id }}
    <input type="text" v-model="state2.form.id" placeholder="곧 사라질거지롱">
    <input type="submit" value="로그인">
  </form>
</template>

<style scoped></style>
