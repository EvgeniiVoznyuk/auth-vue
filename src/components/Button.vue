<template>
   <div class="oval1">
      <a
        href="#"
        @click="showModal"
      >
        <p>{{this.title}}</p>
      </a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    showModal() {
      this.$emit('showModal');
    },
  },
};
</script>
