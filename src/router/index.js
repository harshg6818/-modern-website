import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/hirexp-about.vue";
import Carrer from "../views/hirexp-carrer.vue";
import Customers from "../views/hirexp-customers.vue";

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
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
