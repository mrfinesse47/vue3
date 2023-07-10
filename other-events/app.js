const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'the final empire',
      author: 'Brandon Sanderson',
      age: '45',
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, num) {
      console.log(e, e.type);
      if (num) {
        console.log(num);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount('#app');
