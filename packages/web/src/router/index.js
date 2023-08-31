import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import MainPage from "../views/MainPage.vue";
import GamePage from "../views/GamePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage
  },
  {
    path: "/main",
    name: "Main",
    component: MainPage
  },
  {
    path: "/game",
    name: "Game",
    component: GamePage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
