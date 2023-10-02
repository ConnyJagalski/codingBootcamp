Vue.createApp({
  data() {
    return {
      activeLetter: "",
    };
  },
  methods: {
    activate(letter) {
      this.activeLetter = letter;
    }
  }
}).mount("#app");
