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
body {
  height: 100%;
  margin: 0rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
h1 {
  font-size: 25px;
}
h1, h3 {
  text-shadow: 0.5px 0.5px 0.5px black;
  font-weight: 300
}
.container {
  padding: 0.5rem 0rem;
  margin: 2rem;
  row-gap: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
button:hover {
    cursor: pointer;
}
.card input, .card button {
    padding: 0.5rem;
}
.card p {
    font-size: 0.8rem;
    font-style: italic
}
.card {
  border: solid 0.5px #a0a0a0;
  width: 35rem;
  border-radius: 2px;
}
.card .heading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0rem 1rem;
  border-bottom: solid 0.5px #a0a0a0;
}
.card .card-body {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card button {
  color: white;
  border: solid 0.5px #a0a0a0;
  border-radius: 2px;
  text-shadow: 0.5px 0.5px 0.5px black;
  width: 5rem
}
input:focus {
  outline: none;
}
input {
  height: 1rem;
}
</style>
