import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import ForHer from "@/components/ForHer.vue";
import ForHim from "@/components/ForHim.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import Cart from "@/components/Cart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/for-her",
      name: "ForHer",
      component: ForHer,
    },
    {
      path: "/for-him",
      name: "ForHim",
      component: ForHim,
    },
    {
      path: "/produkt/:id",
      name: "ProductDetails",
      component: ProductDetails,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    }
  ],
});

export default router;
