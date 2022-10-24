import { createRouter, createWebHashHistory } from "vue-router";

// import components
import MainComponent from "../components/MainComponent";

const routes = [
  { path: "/home", name: "home", component: MainComponent },
  { path: "/:catchAll(.*)", redirect: "/home" },
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
