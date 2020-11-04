import Vue from "vue";
import VueRouter from "vue-router";
import authDb from "../firebase";

import Main from "../views/Main.vue";
import Authentication from "../components/Authentication.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/authentication",
  },
  {
    path: "/",
    redirect: "/authentication",
  },
  {
    path: "/authentication",
    name: "Authentication",
    component: Authentication,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = authDb.currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next("Authantication");
  else if (!requiresAuth && currentUser) next("Main");
  else next();
});

export default router;
