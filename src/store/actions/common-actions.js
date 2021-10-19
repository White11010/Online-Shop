export default {
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product);
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_ITEM_FROM_CART', index);
    },
    DECREMENT_CART_ITEM({commit}, index) {
      commit('DECREMENT', index)
    },
    INCREMENT_CART_ITEM({commit}, index) {
      commit('INCREMENT', index)
    },
    SAVE_CHECKED_CATEGORY({commit}, subcategory) {
      commit('SET_CATEGORY', subcategory)
    }
}