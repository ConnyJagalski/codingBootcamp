const quote = document.querySelector("p");
const button = document.querySelector("button");
const author = document.querySelector("footer");
const blockquote = document.querySelector("blockquote");

button.addEventListener("click", createQuote)

function createQuote() {
  
  const data = fetch("https://dummy-apis.netlify.app/api/quote");

  data.then((Response) => {
    if (Response) {
      return Response.json();
    }
  })

    .then((jsonData) => {
      quote.textContent = jsonData.quote;
      author.textContent = "- " + jsonData.author;
    });
  
  blockquote.style.backgroundImage = `url(https://picsum.photos/${Math.floor(Math.random() * 1000)})`;
}