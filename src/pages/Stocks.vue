<template>
  <div class="container">
    <div class="card" v-for="stock in stocks" :key="stock.id">
      <div class="heading">
        <h3>{{ stock.name }}</h3>
        <p>( Price: ${{ stock.price }} )</p>
      </div>
      <div class="card-body">
        <input
          :value="stock.quantity ? stock.quantity : ''"
          placeholder="Quantity"
        />
        <button>BUY</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StocksPage",
  computed: {
    stocks() {
      return this.$store.state.stocks;
    },
  },
  methods: {},
};
</script>
<style scoped>
.container {
  padding: 0.5rem 1.5rem;
  margin: 2rem;
  row-gap: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  border: solid 0.5px #a0a0a0;
  width: 35rem;
  border-radius: 2px;
}
.heading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0rem 1rem;
  background-color: #deefd8;
  color: #527650;
  border-bottom: solid 0.5px #a0a0a0;
}
.card-body {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
button {
  background-color: #99d196;
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
input, button {
    padding: 0.5rem;
}
p {
    font-size: 0.8rem;
    font-style: italic
}
button:active {
    background-color: #6a9168;
}
button:hover {
    cursor: pointer;
}
</style>
