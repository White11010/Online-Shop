export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = [];

    if (state.checkedCategory != "") {
      console.log("hui");
      products.map(function (item) {
        if (state.checkedCategory === item.category) {
          state.products.push(item);
        }
      });
    } else state.products = products;
  },
  SET_CATEGORIES_TO_STATE: (state, products) => {
    let i = 1;
    products.map(function (item) {
      let isCategoryExists = false;
      state.categories.map(function (category) {
        if (item.type === category.type) {
          isCategoryExists = true;
        }
      });
      if (!isCategoryExists) {
        state.categories.push({ type: item.type, subcategories: [], id: i });
        i++;
      }
    });

    products.map(function (item) {
      state.categories.map(function (category) {
        let isSubcategoryExists = false;
        category.subcategories.map(function (subcategory) {
          if (item.category === subcategory) {
            isSubcategoryExists = true;
          }
        });
        if (!isSubcategoryExists && item.type === category.type) {
          category.subcategories.push(item.category);
        }
      });
    });
  },
  SET_CART: (state, product) => {
    if (state.cart.length) {
      let isProductExists = false;
      state.cart.map(function (item) {
        if (item.article === product.article) {
          isProductExists = true;
          item.quantity++;
        }
      });
      if (!isProductExists) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  REMOVE_ITEM_FROM_CART: (state, index) => {
    state.cart.splice(index, 1);
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++;
  },
  SET_CATEGORY: (state, subcategory) => {
    state.checkedCategory = subcategory;
  },
};
