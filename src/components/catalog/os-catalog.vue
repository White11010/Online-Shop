<template>
  <div class="os-catalog">
    <os-filter-menu :itemFilters="itemFilters" @select="sortByCategories" />
    <div class="os-catalog__grid">
      <os-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import osCatalogItem from "../catalog/os-catalog-item.vue";
import osFilterMenu from "./os-filter-menu.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "os-catalog",
  components: {
    osCatalogItem,
    osFilterMenu,
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "CATEGORY"]),
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API",
      "ADD_TO_CART",
      "SAVE_CHECKED_CATEGORY",
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(subcategory) {
      this.SAVE_CHECKED_CATEGORY(subcategory);
      this.GET_PRODUCTS_FROM_API();
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
.os-catalog {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 3.75em;
  padding-bottom: 3em;

  &__grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 774px) {
    .os-catalog__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
