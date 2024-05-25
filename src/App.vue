<template>
  <Navbar v-if="!$route.meta.hideNavBar" />
  <div>
    <main id="app" class="container">
      <router-view></router-view>
    </main>
  </div>
  <Footer v-if="!$route.meta.hideFooter" />
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
#app {
  overflow-x: hidden;
  // height: 100vh;
}
</style>
