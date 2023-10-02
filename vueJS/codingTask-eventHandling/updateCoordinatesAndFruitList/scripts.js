Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    getPositionOfMouse(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    removeFruit(singleFruitItem) {
      this.fruitBasket = this.fruitBasket.filter((currentFruit) => {
        return currentFruit !== singleFruitItem;
      });
    }
  }
}).mount("#app");


