<template>
  <div class="container">
    <div v-if="portfolio.length">
      <div class="card" v-for="item in portfolio" :key="item.id">
        <div class="heading">
          <h3>{{ item.name }}</h3>
          <p>( Price: ${{ item.price }} | Quantity: ${{ item.quantity }} )</p>
        </div>
        <div class="card-body">
          <input
            :value="item.quantity ? item.quantity : ''"
            placeholder="Quantity"
          />
          <button>SELL</button>
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
  computed: {
    portfolio() {
      return this.$store.state.portfolio;
    },
  },
};
</script>
<style scoped>
.no-items {
    border: solid 0.5px #a0a0a0;
    border-radius: 2px;
    padding: 2rem;
    width: 100%
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
