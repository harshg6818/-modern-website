import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/hirexp-about.vue";
import Carrer from "../views/hirexp-carrer.vue";
import Customers from "../views/hirexp-customers.vue";
import GetStart from "../views/hirexp-getStart.vue";
import Roi from "../views/hirexp-roi.vue";
// import HirexpHome from "../views/hirexp-home.vue";
// import HirexpHomeNew from "../views/hirexp-home-1.vue";
import HirexpCarrerNew from "../views/hirexp-carrers-new.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/carrer",
    name: "Carrer",
    component: Carrer
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/customers",
    name: "Customers",
    component: Customers
  },
  {
    path: "/getstart",
    name: "GetStart",
    component: GetStart
  },
  {
    path: "/roi",
    name: "Roi",
    component: Roi
  },
  // {
  //   path: "/home",
  //   name: "HirexpHome",
  //   component: HirexpHome
  // },
  // {
  //   path: "/home-new",
  //   name: "HirexpHomeNew",
  //   component: HirexpHomeNew
  // },
  {
    path: "/carrer-new",
    name: "HirexpCarrerNew",
    component: HirexpCarrerNew
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
