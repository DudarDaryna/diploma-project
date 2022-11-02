import { createRouter, createWebHashHistory } from "vue-router";

// import components
import MainComponent from "../components/MainComponent";
import Playlist from "../components/playlist/Playlist.vue";

const routes = [
  { path: "/home", name: "home", component: MainComponent },
  { path: "/playlist", name: "playlist", component: Playlist },
  { path: "/:catchAll(.*)", redirect: "/home" },
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
