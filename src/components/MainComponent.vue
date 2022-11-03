<template>
  <div class="container">
    <sidebar />
    <div class="wrapper">
      <component :is="currentTab"></component>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import Sidebar from './sidebar/Sidebar';
import Home from './home/Home';
import Playlist from './playlist/Playlist.vue';

export default {
  name: 'MainComponent',
  components: { Sidebar, Home, Playlist },
  computed: mapState({
    currentTab: state => state.currentTab,
  })
}
</script>

<style scoped>

.wrapper {
  padding: 60px 0;
}

</style>
