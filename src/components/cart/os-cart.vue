<template>
  <div class="os-cart">
    <os-cart-item
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @decrement="decrement(index)"
      @increment="increment(index)"
    />
    <div class="os-cart__total">
      <p>Price:</p>
      <p>{{ cartTotalCost }}</p>
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
      // let result = []
      // for (let item of  this.CART) {
      //    result.push(item.price*item.quantity);
      // }
      // result = result.reduce(function (sum, el) {
      //     return sum + el;
      // })
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
  margin-top: 60px;
}
</style>
