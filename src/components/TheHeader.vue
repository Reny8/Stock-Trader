<template>
  <header>
    <div class="first">
      <router-link to="/">
        <h1>{{ title }}</h1></router-link
      >
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/stocks">Stocks</router-link>
    </div>
    <div class="second">
      <button>End Day</button>
      <select>
        <option selected disabled hidden>Save &amp; Load</option>
        <option value="save">Save Data</option>
        <option value="load">Load Data</option>
      </select>
      <p>Funds: ${{ funds }}</p>
    </div>
  </header>
</template>

<script>
import numeral from "numeral";
export default {
  name: "TheHeader",
  props: ["title"],
  computed: {
    funds() {
      return numeral(this.$store.state.funds).format("0,0");
    },
  },
};
</script>

<style scoped>
header {
  color: #5c5c5c;
  background-color: white;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1.5rem;
  margin: 2rem;
  border-radius: 2px;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}
div {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}
h1 {
  margin: 0rem;
}
a {
  text-decoration: none;
  opacity: 0.8;
}
h1,
a,
select,
button {
  font-weight: 300;
  color: inherit;
}
a:not(a:has(h1)):hover {
  opacity: 1;
}
.router-link-active:not(.router-link-active:has(h1)) {
  opacity: 1;
  color: #527650;
  font-weight: 600
}
select {
  opacity: 0.8;
}
select:focus {
  outline: none;
}
select:hover,
button:hover {
  cursor: pointer;
}
p {
  font-weight: 600;
  margin: 0rem;
}
button,
select {
  background: transparent;
  border: none;
  border-radius: 2px;
  font-size: 15px;
}
div.second {
  align-items: stretch;
}
div.second > * {
  padding: 0.5rem 1rem;
}
button:active {
  background: rgba(151, 151, 151, 0.687);
  color: white;
}
</style>
