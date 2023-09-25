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
      noFunds: false,
      stocks: [
        {
          id: 1,
          name: "BMW",
          price: 110,
          quantity: 0,
        },
        {
          id: 2,
          name: "Google",
          price: 200,
          quantity: 0,
        },
        {
          id: 3,
          name: "Apple",
          price: 250,
          quantity: 0,
        },
        {
          id: 4,
          name: "Twitter",
          price: 8,
          quantity: 0,
        },
      ],
      portfolio: [],
    };
  },
  mutations: {
    updateQuantity(state, payload) {
      state.quantityInput = parseInt(payload)
    },
  },
  actions: {
    buyStock(context, payload) {
      context.state.noFunds = false;
      const stock = context.state.stocks.find((item) => item.id === payload.id);
      if (
        context.state.funds > 0 && stock.price * context.state.quantityInput <= context.state.funds
      ) {
        stock.quantity += context.state.quantityInput
        context.state.funds -= stock.price * context.state.quantityInput;
        const portfolioStock = context.state.portfolio.find(
          (item) => item.id === payload.id
        );
        if (portfolioStock) {
          // If the stock is already in the portfolio, update its quantity
          portfolioStock.quantity += context.state.quantityInput;
        } else {
          // If the stock is not in the portfolio, add it
          context.state.portfolio.push({
            id: stock.id,
            name: stock.name,
            price: stock.price,
            quantity: parseInt(stock.quantity),
          });
        }
      }
      else {
        context.state.noFunds = true;
      }
    },
    sellStock(context, payload) {
      const record = context.state.portfolio.find(
        (el) => el.id === payload.stock.id
      );
      if (record.quantity > payload.input) {
        record.quantity -= payload.input;
      } else {
        context.state.portfolio.splice(
          context.state.portfolio.indexOf(record),
          1
        );
      }
      context.state.funds += payload.stock.price * payload.input;
    },
  },
});
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
