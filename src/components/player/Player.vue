<template>
  <div class="player">
    
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Player',
  components: {
    song,
  },
  computed: mapState({
    songs: state => state.songs,
  }),
  data() {
    return {
      currentAudio: new Audio(),
    }
  }
}

</script>

<style lang="scss">

</style>
