import { createStore } from "vuex";
import music from "../api/music";

export default createStore({
  state: {
    currentTab: "home",
    songs: music,
    currentAudio: { index: -1, music: "" },
    isPlay: false,
    activePlayList: "all",
  },
  mutations: {
    setTabMutation: (state, payload) => {
      state.currentTab = payload;
    },
    setCurrenAudio: (state, payload) => {
      state.currentAudio = payload;
    },
    updatePlayStatus(state, payload) {
      state.isPlay = payload;
    },
    updatePlayList(state, payload) {
      state.activePlayList = payload;
    },
  },
  actions: {},
  modules: {},
});
