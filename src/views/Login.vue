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
        :key="title[1]"
        :id="title[1]"
        v-for="title in titles"
        :title="title[0]"
        @showModal="openModal"
      />
    </div>
  </div>

    <Modal
      v-if="isModalShown"
      :dialogTableVisible="isModalShown"
      @close-modal="closeModal"
      :dataFromServer="currentData"
    />
    <footer>
      <div class="title_class">
        <div class="column">
          <p><a href="#">moyo.ua</a> since 2009</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';
import Button from '../components/Button.vue';

export default {
  components: {
    Modal,
    Button,
  },
  data() {
    return {
      titles: [
        ['Постачальники', 'suppliers'],
        ['Доставка', 'delivery'],
        ['Співробітники', 'employees'],
        ['Товари', 'products'],
        ['Замовлення', 'order'],
        ['Покупці', 'customers'],
      ],
      links: {
        p: 1,
      },
      isModalShown: false,
      currentData: null,
    };
  },
  async mounted() {
    await this.$store.dispatch('fetchData');
  },
  methods: {
    openModal(id) {
      this.currentData = this.dataObj[id];
      this.isModalShown = true;
    },
    closeModal() {
      this.isModalShown = false;
    },
  },
  computed: {
    dataObj() {
      return {
        suppliers: this.$store.getters.suppliers,
        products: this.$store.getters.products,
        order: this.$store.getters.order,
        employees: this.$store.getters.employees,
        delivery: this.$store.getters.delivery,
      };
    },
  },
};
</script>
