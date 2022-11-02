<template>
  <div class="song-wrapper">
    <div class="song">
      <button class="music-status">
      Play
    </button>
    <div class="song__img">
    </div>
    <div class="song__info">
      <span v-if="name" class="song__name">{{ name }}</span>
      <span v-if="artist" class="song__atrist">{{ artist }}</span>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'song',
  props: {
    name: {
      type: String,
      default: null,
    },
    artist: {
      type: String,
      default: null,
    }
  }
}

</script>

<style lang="scss">
.song {
  display: flex;
  padding: 14px 40px;
  width: 100%;
  border-radius: 6px;
  background-color: var(--white);

  &__img {
    height: 40px;
    width: 40px;
    border-radius: 3px;
    background-color: var(--primary);
  }

  &__info {
   display: flex;
   flex-direction: column;
   margin-left: 20px;
  }
  
  &__name {
    font-size: 16px;
  }

  &__atrist {
    font-size: 12px;
    color: var(--secondary-text);
  }
}
</style>
