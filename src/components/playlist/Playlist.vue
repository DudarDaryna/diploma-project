<template>
  <div class="playlist">
    <ul class="playlist__list" ref="musicList">
      <li class="playlist__song" v-for="(song, index) in songs" :key="index">
        <song :name="song.name" :artist="song.artist" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import song from '../globalComponents/song';

export default {
  name: 'Playlist',
  components: {
    song,
  },
  computed: mapState({
    songs: state => state.songs,
  }),
  methods: {
    selectMusic(music) {
      this.setActiveMusic(music);
    },
  },
}

</script>

<style lang="scss">
.playlist {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
