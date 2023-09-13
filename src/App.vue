<template>
  <TheHeader title="Stock Trader" />
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
  data() {
    return {
      funds: 10000,
    };
  },
};
</script>

<style>
html {
  background-color: #efefee;
}
body {
  height: 100%;
  margin: 0rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-size: 25px;
}
h1, h3 {
  text-shadow: 0.5px 0.5px 0.5px black;
  font-weight: 300
}
</style>
