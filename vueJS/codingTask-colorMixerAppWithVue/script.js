// const r = document.querySelector("#r");
// const g = document.querySelector("#g");
// const b = document.querySelector("#b");
// const color = document.querySelector("span");
// const body = document.querySelector("body");
// const button = document.querySelector("button");

// r.addEventListener("input", mix);
// g.addEventListener("input", mix);
// b.addEventListener("input", mix);
// button.addEventListener("click", getRandomColor);

// function mix(event) {
  
//   const newColor = color.innerText = "rgb(" + r.value + ", " + g.value + ", " + b.value + ")";

//   body.style.backgroundColor = newColor;
// }

// function getRandomColor() {
//   const randomColor = fetch("https://dummy-apis.netlify.app/api/color");

//   randomColor.then((Response) => {
//     if (Response) {
//       return Response.json();
//     }
//   })

//     .then((jsonData) => {
//       r.value = jsonData.rgb.r;
//       g.value = jsonData.rgb.g;
//       b.value = jsonData.rgb.b;
//     })
  
//   mix();
// }

Vue.createApp({
  data() {
    return {
      r: "138",
      g: "43",
      b: "226",
    }
  },
  computed: {
    color() {
      return "rgb" + "(" + this.r + "," + this.g + "," + this.b + ")";
    },
  },
  methods: {
    getRandomColor() {
      const randomColor = fetch("https://dummy-apis.netlify.app/api/color");

      randomColor.then((Response) => {
        if (Response) {
          return Response.json();
        }
      }).then((jsonData) => {
        this.r = jsonData.rgb.r;
        this.g = jsonData.rgb.g;
        this.b = jsonData.rgb.b;
        document.querySelector("body").style.backgroundColor = this.color;
      })
    },
    setBackgroundColor() {
      document.querySelector("body").style.backgroundColor = this.color;
    }
  }
}).mount("#app");