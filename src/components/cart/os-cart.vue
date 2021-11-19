<template>
  <div class="os-cart">
    <div class="os-cart__wrapper">
      <div class="os-cart__items_list">
        <os-cart-item
          v-for="(item, index) in CART"
          :key="item.article"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
          @decrement="decrement(index)"
          @increment="increment(index)"
        />
      </div>

      <div class="os-cart__total" v-if="cartTotalCost != 0">
        <p>Total price: {{ cartTotalCost }}</p>
      </div>
      <div class="os-cart__empty_title" v-else>
        <p>Cart is empty</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import osCartItem from "./os-cart-item.vue";

export default {
  name: "os-cart",
  components: {
    osCartItem,
  },
  computed: {
    ...mapGetters(["CART"]),
    cartTotalCost() {
      let result = 0;
      for (let item of this.CART) {
        result += item.price * item.quantity;
      }
      return result;
    },
  },
  props: {},
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "DECREMENT_CART_ITEM",
      "INCREMENT_CART_ITEM",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
  },
};
</script>

<style>
.os-cart {
  width: 100%;
  margin-top:  3.75em;
  display: flex;
  justify-content: center;
}
.os-cart__wrapper {
  height: 100%;
  width: min(1000px, 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 1rem;
}
.os-cart__total {
  width: 25%;
  margin-left: 1.25rem;
  margin-top: 3rem;
}
.os-cart__empty_title {
  /*     
     display: block;
    margin-left: auto;
    margin-right: auto; */
  margin-top: 100px;
  font-weight: 700;
  font-size: 30px;
}
</style>
