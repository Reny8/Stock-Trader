<template>
  <div>
    <div v-if="portfolio.length" class="container">
      <div class="card" v-for="(item, index) in portfolio" :key="item.id">
        <div class="heading">
          <h3>{{ item.name }}</h3>
          <p>( Price: ${{ item.price }} | Quantity: {{ item.quantity }} )</p>
        </div>
        <div class="card-body">
          <input
            placeholder="Quantity"
            type="number"
            @input="updateQuantityInput"
            v-model="inputValue[index]"
          />
          <button @click="sellStock(item, inputValue[index])" :disabled="disableSell(item, inputValue[index])">SELL</button>
        </div>
      </div>
    </div>
    <div class="no-items" v-else>
      <h1>You have no items in your portfolio!</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "PortfolioPage",
  data() {
    return {
      inputValue: [0, 0, 0, 0],
    };
  },
  computed: {
    portfolio() {
      return this.$store.state.portfolio;
    },
    quantityInput() {
      return this.$store.state.quantityInput;
    },
  },
  methods: {
    sellStock(stock, input) {
      this.$store.dispatch("sellStock", {stock, input});
    },
    updateQuantityInput(event) {
      this.$store.commit("updateQuantity", event.target.value);
    },
    disableSell(item, input) {
      return !Number.isInteger(input) || input <= 0 || item.quantity < input
    },
  },
};
</script>
<style scoped>
.no-items {
  padding: 0.5rem 0rem;
  margin: 2rem;
  border: solid 0.5px #a0a0a0;
  border-radius: 2px;
}
.card .heading {
  background-color: #daeef7;
  color: #617f96;
}
.card button {
  background-color: #e59290;
}
button:active {
  background-color: #834d4b;
}
</style>
