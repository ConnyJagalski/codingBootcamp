// const button = document.querySelector("button");
// const body = document.querySelector("body");
// const title = document.querySelector("title");

// function darkMode(event) {
//   body.classList.toggle("dark-background");
//   button.classList.toggle("dark-button");

//   if (button.classList.contains("dark-button")) {
//     title.innerText = "Good Night";
//   } else {
//     title.innerText = "Good Morning";
//   }
// }

// button.addEventListener("click", darkMode);

Vue.createApp({
  data() {
    return {
      lightOn: true,
    }
  },
  methods: {
    lightOffOn() {
      this.lightOn = !this.lightOn;

      if (!this.lightOn) {
        document.querySelector("title").innerText = "Good Night";
        document.body.classList.add("dark-background");
      } else {
        document.querySelector("title").innerText = "Good Morning";
        document.body.classList.remove("dark-background");
      };
    }
  }
})
  .mount("#app");