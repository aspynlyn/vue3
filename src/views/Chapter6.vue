<script setup>
import { computed, reactive } from 'vue';

// 반응형 상태
const state = reactive({
  mypId: 12,
  players: [
    { id: 7, name: 'John Doe' },
    { id: 9, name: 'Jane Lee' },
    { id: 12, name: 'James Park' },
  ],
});

// 메소드
const getMvpName = () => {
  if (state.mypId) {
    const player = state.players.find((item) => item.id === state.mypId);

    if (player) {
      return player.name;
    }
  }
  return '없음';
};

const getMvpNameNice = () => {
  console.log('getMvpNameNice 메소드');
  return state.players.find((item) => item.id === state.mypId)?.name || '없음';
};

// 컴퓨티드
const computedMvpName = computed(() => {
  console.log('computedMvpName 컴퓨티드');
  return state.players.find((item) => item.id === state.mypId)?.name || '없음';
});
</script>

<template>
  <h1>Chapter6.vue</h1>
  <h1>오늘의 MVP</h1>
  <template v-if="state.mypId">
    {{ state.players.find((item) => item.id === state.mypId)?.name || '없음' }}
    <!-- optional chaining -->
  </template>
  <div>{{ getMvpName() }}</div>
  <div>nice : {{ getMvpNameNice() }}</div>
  <div>nice : {{ getMvpNameNice() }}</div>
  <div>computed : {{ computedMvpName }}</div>
  <div>computed : {{ computedMvpName }}</div>
</template>

<style scoped></style>
