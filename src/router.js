import Vue from "vue";
import Router from "vue-router";
import Login from "./pages/Login";
import Home from "./pages/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ "./pages/Home")
    },
    {
      path: "/Login",
      name: "login",
      component: Login
    }
  ]
});
