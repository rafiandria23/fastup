import type { RouteRecordRaw } from "vue-router";
import { createWebHistory, createRouter } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "HomeView",
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: "/main",
    name: "MainView",
    component: () => import('../views/MainView.vue'),
  },
  {
    path: "/game",
    name: "GameView",
    component: () => import('../views/GameView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
