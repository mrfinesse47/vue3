<template>
  <h1>{{ title }}</h1>
  <!-- <Modal
    header="Sign Up For The Giveaway"
    text="Grab Your Ninja Swag For Halfprice!"
  /> -->
  <Modal :header="header" :text="text" theme="sale" />
  <!-- binding to data instead -->
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
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
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
