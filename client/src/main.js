import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios.create({ baseURL: "http://172.16.16.218:3000/api" });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
