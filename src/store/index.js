import Vue from 'vue';
import Vuex from 'vuex';
import * as fb from '../firebase';
// import router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {},
    users: [],
  },
  mutations: {
    setUserProfile(state, val) {
      state.users = val;
    },
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password);

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user);
    },
    async fetchUserProfile({ commit }) {
      // fetch user profile
      const userProfile = await fb.usersCollection.get();
      console.log(userProfile);
      // set user profile in state
      commit('setUserProfile', userProfile.data());
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password);

      // create user profile object in userCollections
      await fb.postsCollection.doc(user.uid).set({
        name: form.name,
        test: form.testNumber,
      });

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user);
    },
  },
  getters: {
    users: (state) => state.users,
  },
  modules: {
  },
});
