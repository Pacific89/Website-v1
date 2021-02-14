<template>
  <div id="app">
    <home msg="home" />
  </div>
</template>

<script>
import home from "./components/home.vue";

export default {
  name: "App",
  components: {
    home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
body {
  background-image: url('~@/assets/main_page_sterne_nice.png');
  background-size: cover;
}
</style>
