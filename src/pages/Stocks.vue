<template>
  <div class="container">
    <div class="card" v-for="(stock, index) in stocks" :key="stock.id">
      <div class="heading">
        <h3>{{ stock.name }}</h3>
        <p>( Price: ${{ stock.price }} )</p>
      </div>
      <div class="card-body">
        <input
          placeholder="Quantity"
          @input="updateQuantityInput"
          v-model="inputValue[index]"
          type="number"
        />
        <button @click="buyStock(stock, index)" :disabled="stock.noprice">BUY</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StocksPage",
  data() {
    return {
      inputValue: [null, null, null, null],
    };
  },
  computed: {
    stocks() {
      return this.$store.state.stocks;
    },
    quantityInput() {
      return this.$store.state.quantityInput;
    },
  },
  methods: {
    buyStock(stock, index) {
      this.$store.commit("buyStock", stock);
      this.inputValue[index] = null;
    },
    updateQuantityInput(event) {
      this.$store.commit("updateQuantity", event.target.value);
    },
  },
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
button:disabled {
  background-color: #a0a0a0;
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
