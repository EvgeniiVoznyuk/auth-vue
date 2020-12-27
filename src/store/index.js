import Vue from 'vue';
import Vuex from 'vuex';
import * as fb from '../firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    delivery: [],
    employees: [],
    order: [],
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
    setDelivery(state, val) {
      state.delivery = val;
    },
    setEmployees(state, val) {
      state.employees = val;
    },
    setOrder(state, val) {
      state.order = val;
    },
  },
  actions: {
    async fetchData({ commit }) {
      const delivery = [];
      const employees = [];
      const order = [];
      const products = [];
      const suppliers = [];
      await fb.productCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          products.push(doc.data());
        });
      });
      await fb.deliveryCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          delivery.push(doc.data());
        });
      });
      await fb.suppliersCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          suppliers.push(doc.data());
        });
      });
      await fb.orderCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          order.push(doc.data());
        });
      });
      await fb.employeesCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          employees.push(doc.data());
        });
      });
      commit('setProducts', products);
      commit('setSuppliers', suppliers);
      commit('setOrder', order);
      commit('setEmployees', employees);
      commit('setDelivery', delivery);
      console.log('fetched');
    },
  },
  getters: {
    products: (state) => state.products,
    suppliers: (state) => state.suppliers,
    order: (state) => state.order,
    employees: (state) => state.employees,
    delivery: (state) => state.delivery,
  },
  modules: {
  },
});
