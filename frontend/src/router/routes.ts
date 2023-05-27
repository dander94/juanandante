import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    name: 'dashboard',
    children: [
      { path: '', component: () => import('pages/dashboard/DashboardIndex.vue'), name: 'dashboard:home' },
      { path: 'match/:id/', component: () => import('pages/dashboard/MatchRequest.vue'), name: 'dashboard:match-request' },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
