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

/* IFTRUE_isOutApp */
  routes.push(  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: 'about' */ '../pages/AboutView.vue'),
  })
/* IFTRUE_isOutApp */


const router = new VueRouter({
  routes,
});

export default router;
