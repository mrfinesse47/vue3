<template>
  <div class="block" v-if="showBlock" @click="stopTimer">Click Me</div>
</template>
<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    // a lifecycle hook
    // https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
    console.log('component mounted');
    // start timer
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
      console.log(this.delay);
    }, this.delay);
  },
  updated() {
    console.log('updated this.showBlock due to updated hook');
  },
  unmounted() {
    console.log('Block unmounted');
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      console.log('reaction time', this.reactionTime);
    },
  },
};
</script>
<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
