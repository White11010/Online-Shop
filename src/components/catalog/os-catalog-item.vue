<template>
  <div class="os-catalog-item">
    <img
      class="os-catalog-item__pic"
      :src="require('../../assets/images/' + product_data.image)"
      alt="img"
    />
    <div class="os-catalog-item__info">
      <p class="os-catalog-item__name">{{ product_data.name }}</p>
      <p class="os-catalog-item__price">{{ product_data.price }} $</p>
      <button class="os-catalog-item__add_to_cart_btn btn" @click="addToCart">
        ADD TO CART
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "os-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>

<style lang="scss">
.os-catalog-item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 0 auto;
  box-shadow: 0 0 8px 0 #8a8a8a00;
  margin: 0;
  padding: 4vw 1.5vw 0;
  box-sizing: border-box;
  width: 25%;
  height: 25%;

  
  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    & > *{
      margin-top: 1vw;
      font-weight: 700;
    }

  }
    
   
  &__pic {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  &__name{
    font-size: 15px;
  }

  &__price{
    font-size: 13px;
  }

  &__add_to_cart_btn{
    width: 120px;
    height: 40px;
  }
}

</style>
