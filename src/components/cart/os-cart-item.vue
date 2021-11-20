<template>
  <div class="os-cart-item">
    <img
      class="os-cart-item__pic"
      :src="require('../../assets/images/' + cart_item_data.image)"
      alt="img"
    />
    <div class="os-cart-item__info info">
      <p>{{ cart_item_data.name }}</p>
      <p class="info__price">{{ cart_item_data.price }}</p>
    </div>
    <div class="os-cart-item__quantity quantity">
      <p>Quantity:</p>
      <div class="quantity__value">
        <span class="quantity__button" @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span class="quantity__button" @click="incrementItem">+</span>
      </div>
    </div>
    <button class="os-cart-item__button btn" @click="deleteFromCart">
      DELETE
    </button>
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
  &__button {
    font-size: 1rem;
    width: 5em;
  }
}
.info {
  width: 25%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 1rem;
  box-sizing: border-box;

  &__price {
    margin-top: 0.5rem;
    font-size: 1.3rem;
  }
}
.quantity {
  width: 25%;

  &__value {
    margin-top: 0.5rem;
    font-size: 1.3rem;
    font-weight: 700;
  }

  &__button {
    cursor: pointer;
  }
}
</style>
