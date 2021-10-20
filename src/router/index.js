import { createRouter, createWebHashHistory } from "vue-router";

import osCatalog from "../components/catalog/os-catalog";
import osCart from "../components/cart/os-cart";

const routes = [
  {
    path: "/",
    name: "catalog",
    component: osCatalog,
  },
  {
    path: "/cart",
    name: "cart",
    component: osCart,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
