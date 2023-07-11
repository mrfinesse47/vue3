<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal" />
  </div>
  <div>
    <!-- <button @click.right="toggleModal">Open Modal</button>
    an example of a click modifies .right will trigger the event on a right mouse click -->
    <!-- <button @click.shift="toggleModal">Open Modal</button> -->
    <button @click.alt="toggleModal">Open Modal (alt/option)</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My Vue App',
      header: 'Sign Up For The Giveaway',
      text: 'Grab Your Ninja Swag For Halfprice!',
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
