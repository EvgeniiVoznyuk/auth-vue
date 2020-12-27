import Vue from 'vue';
import Vuex from 'vuex';
import * as fb from '../firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    suppliers: [],
  },
  mutations: {
    setProducts(state, val) {
      state.products = val;
    },
    setSuppliers(state, val) {
      state.suppliers = val;
    },
  },
  actions: {
    async fetchData({ commit }) {
      const products = [];
      const suppliers = [];
      await fb.productCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          products.push(doc.data());
        });
      });
      await fb.suppliersCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          suppliers.push(doc.data());
        });
      });
      commit('setProducts', products);
      commit('setSuppliers', suppliers);
      console.log('fetched');
    },
  },
  getters: {
    products: (state) => state.products,
    suppliers: (state) => state.suppliers,
  },
  modules: {
  },
});
