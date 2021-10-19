import { createStore } from "vuex";


import commonActions from './actions/common-actions'
import apiActions from './actions/api-actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'

const actions = {...commonActions, ...apiActions}

export default createStore({
  state: {
    products: [],
    categories: [],
    checkedCategory: '',
    cart: [],
  },
  mutations,
  actions,
  modules: {},
  getters,
});
