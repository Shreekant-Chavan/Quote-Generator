const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const tweetBtn = document.getElementById('tweetBtn');

const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url);

newQuoteBtn.addEventListener('click', () => {
    getQuote(api_url)
})

tweetBtn.addEventListener('click', tweetyBtn);

function tweetyBtn() {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} -- ${author.innerHTML}`, "Tweet Window", "width=600, height=600");
}