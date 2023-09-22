<template>
  <div class="alert" v-if="noFunds">
    <svg-icon type="mdi" :path="path"></svg-icon>
    <p>You do not have enough funds to buy that amount of stocks</p>
  </div>
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
        <button
          @click="buyStock(stock, index)"
          :disabled="disableBuy(inputValue[index])"
        >
          BUY
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAlertBox } from "@mdi/js";
export default {
  name: "StocksPage",
  components: {
    SvgIcon,
  },
  data() {
    return {
      inputValue: [0, 0, 0, 0],
      path: mdiAlertBox,
    };
  },
  computed: {
    stocks() {
      return this.$store.state.stocks;
    },
    quantityInput() {
      return this.$store.state.quantityInput;
    },
    noFunds() {
      return this.$store.state.noFunds;
    },
  },
  methods: {
    buyStock(stock, index) {
      this.$store.dispatch("buyStock", stock);
      this.inputValue[index] = 0;
    },
    updateQuantityInput(event) {
      this.$store.commit("updateQuantity", event.target.value);
    },
    disableBuy(input) {
      return !Number.isInteger(input) || input <= 0;
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
div.alert {
  border: solid rgb(255, 166, 0);
  color: rgb(255, 166, 0);
  background-color: rgba(255, 166, 0, 0.359);
  padding: 0.5rem 0rem;
  margin: 2rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
div.alert p {
  text-shadow: 0.5px 0.5px 0.5px black;
}
svg {
  filter: drop-shadow(0.5px 0.5px 0.5px rgba(0, 0, 0, 0.612));
}
</style>
