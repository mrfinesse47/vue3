const app = Vue.createApp({
  data() {
    return {
      title: 'the final empire',
      author: 'Brandon Sanderson',
      age: '45',
    };
  },
  methods: {
    changeTitle(title) {
      console.log(this.title);
      this.title = title;
    },
  },
});

app.mount('#app');
