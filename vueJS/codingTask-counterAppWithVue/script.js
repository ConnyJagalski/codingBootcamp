Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    updateCount() {
      this.count++;
      this.setCountInCSS()
    },
    resetCounter() {
      this.count = 0;
      this.setCountInCSS()
    },
    setCountInCSS() {
      document.documentElement.style.setProperty('--counter', this.count + "%");
    }
  }
}).mount("#app");
