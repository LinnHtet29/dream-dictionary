import HomeVue from "../components/HomeVue.vue";
import DetailsVue from "../components/DetailsVue.vue";

export default [
  { path: "/", component: HomeVue },
  { path: "/:term", component: DetailsVue },
  { path: "/details/:id", component: DetailsVue },
];
