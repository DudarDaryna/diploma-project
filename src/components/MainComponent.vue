<template>
  <div class="container">
    <sidebar />
    <div class="wrapper">
      <component :is="currentTab"></component>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar/Sidebar';
import Home from './home/Home';

export default {
  name: 'MainComponent',
  components: { Sidebar, Home },
  data() {
    return {
      currentTab: 'Home',
    }
  }
}
</script>

<style scoped>

.wrapper {
  padding: 60px 0;
}

</style>
