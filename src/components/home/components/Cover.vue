<template>
  <div class="cover">
    <a href="/" class="cover__item item">
          <!-- <img src="" alt=""> -->
          <div class="item__data">
            <p class="item__performer">Performer 2</p>
            <p class="item__composition">Composition</p>
          </div>
        </a>
  </div>
</template>

<script>

export default {
  name: 'Cover',
}

</script>

<style lang="scss">
.cover {
  display: flex;
  width: 100%;
  height: 180px;
  border-radius: 12px;
  background-color: var(--primary);

  &__item {
    padding: 26px 22px;
  }

  .item {
    // color: #FFFFFF;

    &__performer {
      font-size: 13px;
      line-height: 18px;
    }

    &__composition {
      font-weight: 700;
      font-size: 24px;
      line-height: 33px;
      color: #FFFFFF;
    }
  }
}
</style>
