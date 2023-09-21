<template>
  <Navbar v-if="isloaded" />
  <PageLoader v-if="!isloaded" />
  <router-view />
</template>
<script>
import Navbar from "@/components/NavbarView.vue";
import PageLoader from "@/components/PageLoaderView.vue";
export default {
  components: {
    Navbar,
    PageLoader,
  },
  data() {
    return {
      isloaded: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        // Set isloaded to true in the App.vue component
        this.isloaded = true;
      }
    };
  },
};
</script>
PageLoader
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
