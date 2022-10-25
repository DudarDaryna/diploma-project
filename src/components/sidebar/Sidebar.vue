<template>
  <div class="sidebar">
    <div class="sidebar__content">
      <div class="logo">
        <img src="../../assets/Logo.svg" alt="RHYTHM logo">
      </div>
      <div class="sidebar__navigation navigation">
        <ul class="navigation__list">
          <p class="navigation__title">Меню</p>
          <li class="navigation__item active">
            <router-link to="/home">
              <i class="icon-globe"></i>
              Головна
            </router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/playlists">Плейлисти</router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/home">Альбоми</router-link>
          </li>
        </ul>

        <ul class="navigation__list">
          <p class="navigation__title">Бібліотека</p>
          <li class="navigation__item">
            <router-link to="/home">Нещодавні</router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/favourites">Вибрані</router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/local">Локальні</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Sidebar',
}

</script>

<style lang="scss">
.sidebar {
  position: relative;

  height: 100vh;
  background-color: #E8ECEF;

  &::before {
    content: "";
    position: absolute;
    height: 100vh;
    width: calc(100vw - 720px);
    transform: translateX(-100%);
    background-color: #E8ECEF;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 60px 0;
    padding-left: 16px;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    gap: 40px;

    &__title {
      margin-bottom: 24px;
      font-size: 18px;
      line-height: 25px;
      color: var(--secondary-text);
      text-transform: uppercase;
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &__item {
      a {
        font-size: 15px;
        line-height: 20px;
        color: var(--base-text);
      }

      &.active {
        a {
          font-weight: var(--font-weight-bold);
          color: var(--primary);
        }
      }
    }
  }
}
</style>
