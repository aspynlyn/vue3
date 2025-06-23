import { createRouter, createWebHistory } from 'vue-router';
import Component from '@/views/Component.vue';
import Mustache from '@/views/Mustache.vue';
import Chapter3 from '@/views/Chapter3.vue';
import Chapter4 from '@/views/Chapter4.vue';
import Chapter5 from '@/views/Chapter5.vue';
import Chapter7 from '@/views/Chapter7.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/component',
      component: Component,
    },
    {
      path: '/mustache',
      component: Mustache,
    },
    {
      path: '/chapter3',
      component: Chapter3,
    },
    {
      path: '/chapter4',
      component: Chapter4,
    },
    {
      path: '/chapter5',
      component: Chapter5,
    },
    {
      path: '/chapter6',
      component: () => import('@/views/Chapter6.vue'),
    },
    // 이렇게 화살표함수로 바로 import 걸수도 있음
    {
      path: '/chapter7',
      component: Chapter7,
    },
    {
      path: '/chapter8',
      component: () => import('@/views/Chapter8.vue'),
    },
  ],
});
// path : 서버 파일 경로 명
// component : 파일 명
export default router;
