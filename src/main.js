import { createApp } from "vue";
import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
  ],
});
const store = createStore({
  state() {
    return {
      funds: 10000,
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
        },
        {
          id: 4,
          name: "Twitter",
          price: 8,
        }
      ],
      portfolio: [],
    };
  },
});
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
