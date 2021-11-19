<template>
  <div class="os-cart-item">
    <img
      class="os-cart-item__pic"
      :src="require('../../assets/images/' + cart_item_data.image)"
      alt="img"
    />
    <div class="os-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
    </div>
    <div class="os-cart-item__quantity">
      <p>Quantity:</p>
      <span>
        <span class="os-cart-item__quantity_btn" @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span class="os-cart-item__quantity_btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button class="btn" @click="deleteFromCart">DELETE</button>
  </div>
</template>

<script>
export default {
  name: "os-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.os-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
  &__pic {
    width: 25%;
  }
  &__info {
    margin-left: 20px;
    width: 25%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  &__quantity {
    &_btn {
      cursor: pointer;
    }
  }
}
</style>
