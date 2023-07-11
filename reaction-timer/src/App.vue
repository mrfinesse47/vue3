<template>
  <h1>Ninja Reaction Timer</h1>
  <Block v-if="isPlaying" :delay="delay" />
  <button @click="start" :disabled="isPlaying">Play</button>
</template>

<script>
import Block from './components/Block.vue';
export default {
  name: 'App',
  components: { Block },
  data() {
    return { isPlaying: false, delay: null, isPlaying: false };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.delay = 2000 + Math.random() * 5000; // max 7000 ms, min 2000 ms.
      console.log(this.delay);
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
  color: #444;
  margin-top: 60px;
}
</style>
