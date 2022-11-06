<template>
  <div class="sidebar">
    <div class="sidebar__content">
      <div class="logo">
        <img src="../../assets/Logo.svg" alt="RHYTHM logo">
      </div>
      <div v-for="(list, index) in navList" :key="index" class="sidebar__navigation navigation">
        <ul class="navigation__list">
          <p class="navigation__title">{{ list.title }}</p>
          <li v-for="(item, index) in list.items" :key="index" class="navigation__item"
            :class="currentTab == item.tab ? 'active' : ''">
            <a @click="changeTab(item.tab, item.routePath)">
              {{ item.itemTitle }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Sidebar',
  data() {
    return {
      navList: [
        {
          title: 'Меню',
          items: [
            { itemTitle: 'Головна', tab: "home", routePath: '/home' },
            { itemTitle: 'Плейлисти', tab: "playlists", routePath: '/playlists' },
            { itemTitle: 'Альбоми', tab: "albums", routePath: '/albums' },
          ],
        },
        {
          title: 'Бібліотека',
          items: [
            { itemTitle: 'Нещодавні', tab: "recent", routePath: '/recent' },
            { itemTitle: 'Вибрані', tab: "favourites", routePath: '/favourites' },
            { itemTitle: 'Локальні', tab: "local", routePath: '/local' },
          ],
        }
      ],
    }
  },
  computed: {
    ...mapState({
      currentTab: state => state.currentTab,
    }),
  },
  methods: {
    changeTab(tab, routePath) {
      if (this.currentTab != tab) {
        this.$router.push({path: tab})
        this.$store.commit("setTabMutation", routePath);
      }
    },
  },
}

</script>

<style lang="scss">
.sidebar {
  position: relative;

  min-height: 100vh;
  height: 100%;
  background-color: #E8ECEF;

  &::before {
    content: "";
    position: absolute;
    min-height: 100vh;
    height: 100%;
    width: calc(100vw - 720px);
    transform: translateX(-100%);
    background-color: #E8ECEF;
  }

  &__content {
    position: fixed;
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

        &:hover {
          color: var(--base-text-hover);
          cursor: pointer;
        }
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
