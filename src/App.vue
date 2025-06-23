<script setup></script>

<template>
  <div>
    <router-link to="/component">컴포넌트</router-link>
    <router-link to="/mustache"> mustache template </router-link>
    <router-link to="/chapter3">chapter3</router-link>
    <router-link to="/chapter4">chapter4</router-link>
    <router-link to="/chapter5">반응형 상태</router-link>
    <router-link to="/chapter6">컴퓨티드</router-link>
    <router-link to="/chapter7">데이터 바인딩</router-link>
    <router-link to="/chapter8">훅Hook</router-link>
    <router-view />
  </div>
</template>

<style scoped></style>
