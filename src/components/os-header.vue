<template>
  <div class="os-header">
    <router-link :to="{ name: 'catalog' }">
      <div class="os-header__logo link" @click="clearFilters">
        my online shop
      </div>
    </router-link>

    <router-link :to="{ name: 'cart' }">
      <div class="os-header__cart link">CART: {{ cartQuantity }}</div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "os-header",
  computed: {
    ...mapGetters(["CART"]),
    cartQuantity() {
      let result = 0;
      for (let item of this.CART) {
        result += item.quantity;
      }
      return result;
    },
  },
  methods: {
    ...mapActions(["SAVE_CHECKED_CATEGORY", "GET_PRODUCTS_FROM_API"]),
    clearFilters() {
      if (this.$route.path == "/") {
        this.SAVE_CHECKED_CATEGORY("");
        this.GET_PRODUCTS_FROM_API();
      }
    },
  },
};
</script>

<style lang="scss">
.os-header {
  position: fixed;
  top: 0;
  left: 0;
  padding: 1.125em 1.875em;
  width: 100%;
  height: 3.75em;
  box-sizing: border-box;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    color: #fff;
    font-size: 1.3125rem;
    font-weight: bold;
  }
  &__cart {
    color: #fff;
    font-size: 1.3125rem;
  }
}
</style>
