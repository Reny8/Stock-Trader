<template>
  <div class="container">
    <div class="card" v-for="stock in stocks" :key="stock.id">
      <div class="heading">
        <h3>{{ stock.name }}</h3>
        <p>( Price: ${{ stock.price }} )</p>
      </div>
      <div class="card-body">
        <input
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
.card .heading {
  background-color: #deefd8;
  color: #527650;
}
.card .card-body {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card button {
  background-color: #99d196;
}
button:active {
    background-color: #6a9168;
}
</style>
