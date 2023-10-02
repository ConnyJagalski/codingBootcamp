Vue.createApp({
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    updateActiceTabDeclaration(event) {
      this.activeTab = Number(event.target.name);
    },
  }
}).mount("#app");
