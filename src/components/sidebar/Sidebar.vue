<template>
  <div class="sidebar">
    <div class="logo">
      <img src="../../assets/Logo.svg" alt="RHYTHM logo">
    </div>
    <div class="nav">
      <ul>
        <p>Меню</p>
        <li>
          <router-link to="/home">Головна</router-link>
        </li>
        <li>
          <router-link to="/playlists">Плейлисти</router-link>
        </li>
        <li>
          <router-link to="/home">Альбоми</router-link>
        </li>
      </ul>

      <ul>
        <p>Бібліотека</p>
        <li>
          <router-link to="/home">Нещодавні</router-link>
        </li>
        <li>
          <router-link to="/favourites">Вибрані</router-link>
        </li>
        <li>
          <router-link to="/local">Локальні</router-link>
        </li>
      </ul>

      <ul>
        <p>Плейлисти</p>
      </ul>
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
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  height: 100vh;
  gap: 40px;
  background-color: #E8ECEF;
}

</style>
