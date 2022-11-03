import { createStore } from "vuex";

export default createStore({
  state: {
    currentTab: "home",
    songs: [
      {
        index: 0,
        name: "Світ мене ловив",
        artist: 'Лілу 45',
        file: require("@/assets/songs/Lily45.mp3"),
      },
      {
        index: 1,
        name: "Будь мені кимось",
        artist: 'Один в каное',
        file: require("@/assets/songs/Odyn-v-kanoe.mp3"),
      },
      {
        index: 2,
        name: "Несмачний мед",
        artist: 'To Eternity',
        file: require("@/assets/songs/to-eternity-nesmachniy-med.mp3"),
      },
    ],
    activeMusic: { index: -1, music: "" },
    isPlay: false,
    activePlayList: "all",
  },
  mutations: {
    setTabMutation: (state, payload) => {
      state.currentTab = payload;
    },
    setCurrentMusic: (state, newMusic) => {
      state.activeMusic = newMusic;
    },
    updatePlayStatus(state, status) {
      state.isPlay = status;
    },
    updatePlayList(state, playList) {
      state.activePlayList = playList;
    },
  },
  actions: {},
  modules: {},
});
