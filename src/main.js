import Vue from "vue";
import App from "./App.vue";
import Routes from "./routes/routes";
import VueRouter from "vue-router";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://dream-dictionary-api.onrender.com";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
});

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
