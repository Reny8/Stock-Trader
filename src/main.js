import { createApp } from "vue";
import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

//PAGES
import HomePage from "./pages/Home.vue";
import StocksPage from "./pages/Stocks.vue";
import PortfolioPage from "./pages/Portfolio.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/stocks", component: StocksPage },
    { path: "/portfolio", component: PortfolioPage },
  ],
});
const store = createStore({
  state() {
    return {
      quantityInput: 0,
      funds: 10000,
      stocks: [
        {
          id: 1,
          name: "BMW",
          price: 110,
          quantity: 0,
          noprice: false,
        },
        {
          id: 2,
          name: "Google",
          price: 200,
          quantity: 0,
          noprice: false,
        },
        {
          id: 3,
          name: "Apple",
          price: 250,
          quantity: 0,
          noprice: false,
        },
        {
          id: 4,
          name: "Twitter",
          price: 8,
          quantity: 0,
          noprice: false,
        },
      ],
      portfolio: [],
    };
  },
  mutations: {
    buyStock(state, payload) {
      // Find the stock by its id
      const stock = state.stocks.find((item) => item.id === payload.id);
      if (stock.price === 0) {
        stock.noprice = true;
        return;
      }
      // Check if the user has enough funds to make the purchase
      else if (
        state.funds > 0 &&
        stock.price > 0 &&
        state.funds - state.quantityInput > 0
      ) {
        // Subtract the purchased quantity from the stock
        let quantity = parseInt(stock.quantity);
        quantity += parseInt(state.quantityInput);
        stock.quantity = quantity;
        // Subtract the total cost from the funds
        state.funds -= state.quantityInput;
        let newprice =  stock.price ? (stock.price -= state.quantityInput) : (stock.price = 0);
        if (stock.price === 0) {
          stock.noprice = true;
        }
        // Add the purchased stock to the portfolio
        const portfolioStock = state.portfolio.find(
          (item) => item.id === payload.id
        );
        if (portfolioStock) {
          // If the stock is already in the portfolio, update its quantity
          let quantity = parseInt(portfolioStock.quantity);
          quantity += parseInt(state.quantityInput);
          portfolioStock.quantity = quantity;
          portfolioStock.price = newprice 
        } else {
          // If the stock is not in the portfolio, add it
          state.portfolio.push({
            id: stock.id,
            name: stock.name,
            price: newprice,
            quantity: parseInt(stock.quantity),
          });
        }
      }
    },
    updateQuantity(state, payload) {
      state.quantityInput = payload;
    },
  },
});
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
