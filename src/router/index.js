import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../pages/HomeView.vue";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  }
];

if(false) {
  routes.push({
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: 'about' */ '../pages/AboutView.vue'),
  })
}


const router = new VueRouter({
  routes,
});

export default router;
