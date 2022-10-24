<template>
  <div class="container">
    <div class="home">
      <sidebar />
    <div class="hello">
      <h1> Main </h1>
    </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar/Sidebar';

export default {
  name: 'MainComponent',
  components: { Sidebar },
}
</script>

<style scoped>

.container {
  max-width: 1440px;
  margin: 0 auto;
}
.home {
  display: grid;
  grid-template-columns: 2fr 10fr;
  column-gap: 20px;
}
</style>
