<template>
  <div class="os-filter-menu">
    <div
      class="os-filter-menu__categories"
      v-for="category in CATEGORIES"
      :key="category.id"
    >
      <p
        class="os-filter-menu__categories-name"
        @click="
          areCategoriesVisible[category.id] = !areCategoriesVisible[category.id]
        "
      >
        {{ category.type }}
      </p>
      <div
        class="os-filter-menu__subcategories"
        v-if="areCategoriesVisible[category.id]"
      >
        <p
          class="os-filter-menu__subcategories-name"
          v-for="subcategory in category.subcategories"
          :key="subcategory"
          @click="selectCategory(category, subcategory)"
        >
          {{ subcategory }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "os-filter-menu",
  data() {
    return {
      areCategoriesVisible: [],
    };
  },
  computed: {
    ...mapGetters(["CATEGORIES"]),
  },
  props: {
    itemFilters: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default() {
        return "";
      },
    },
  },
  methods: {
    ...mapActions([]),
    selectCategory(category, subcategory) {
      this.$emit("select", subcategory);
      this.areCategoriesVisible[category.id] = false;
    },
    hideSelect() {
      for (let i = 0; i < this.areCategoriesVisible.length; i++) {
        this.areCategoriesVisible[i] = false;
      }
    },
  },
  mounted() {
    for (let i = 0; i < this.itemFilters.length; i++) {
      this.areCategoriesVisible.push(false);
    }
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style lang="scss">
.os-filter-menu {
  width: 100%;
  position: fixed;
  top: 3.75rem;
  height: 2.6875em;
  margin: 0 0;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  &__categories {
    width: 16rem;
    box-sizing: border-box;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    &-name {
      position: relative;
      font-size: 1em;
    }
    &-name:hover {
      cursor: pointer;
      color: rgb(107, 107, 107);
    }
  }

  &__subcategories {
    position: absolute;
    top: 1.5rem;
    left: 0;
    width: min(16rem, 50vw);
    background-color: white;
    border: 1px solid black;
    padding: 10px;
    box-sizing: border-box;
    color: black;

    &-name {
      margin: 0.5rem 0;
    }
    &-name:hover {
      color: rgb(107, 107, 107);
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 576px) {
  .os-filter-menu__categories-name {
    font-size: 1.1em;
  }
}
</style>
