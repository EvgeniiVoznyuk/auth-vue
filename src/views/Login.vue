<template>
  <div class="main">
     <div class="container">
    <div class="col-lg-3 hidden-md hidden-sm hidden-xs logomoyo">
      <a href="#"><img src="~@/assets/img/logo.png" class="img-rounded" alt=""></a>
    </div>
    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12  header">
      <h1>Веб-додаток магазину "MOYO" для співробітників</h1>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <Button
        :key="title"
        v-for="title in titles"
        :title="title"
        @showModal="openModal"
      />
    </div>
  </div>

    <Modal />
    <footer>
      <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 title_class">
        <div class="column">
          <p><a href="#">moyo.ua</a> since 2009</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';
// import Modal from '../../node_modules/material-ui/core/Modal.';
import Button from '../components/Button.vue';

export default {
  components: {
    Modal,
    Button,
  },
  data() {
    return {
      // loginForm: {
      //   email: '',
      //   password: '',
      // },
      // signupForm: {
      //   name: '',
      //   email: '',
      //   password: '',
      // },
      // showLoginForm: true,
      // showPasswordReset: false,
      titles: [
        'Постачальники',
        'Доставка',
        'Співробітники',
        'Товари',
        'Замовлення',
        'Покупці',
      ],
    };
  },
  methods: {
    openModal() {
      console.log('123');
      this.$bvModal.show('my-modal');
    },
    // login() {
    //   this.$store.dispatch('login', {
    //     email: this.loginForm.email,
    //     password: this.loginForm.password,
    //   });
    // },
    // signup() {
    //   this.$store.dispatch('signup', {
    //     email: this.signupForm.email,
    //     password: this.signupForm.password,
    //     name: this.signupForm.name,
    //     testNumber: 1,
    //   });
    // },
    // toggleForm() {
    //   this.showLoginForm = !this.showLoginForm;
    // },
    // togglePasswordReset() {
    //   this.showPasswordReset = !this.showPasswordReset;
    // },
  },
};
</script>
