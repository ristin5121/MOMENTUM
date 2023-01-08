const quotes = [
  {
    quote:
      "It is possible to fail in many ways...while to succeed is possible only in one way.",
    author: "Aristotle",
  },
  {
    quote: "Everything comes to him who hustles while he waits.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
    author: "Thomas A. Edison",
  },
  {
    quote: "The most wasted of all days is one without laughter.",
    author: "E. E. Cummings",
  },
  {
    quote: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett",
  },
  {
    quote: "If you would be loved, love and be lovable.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Study the past if you would define the future.",
    author: "Confucius",
  },
  {
    quote:
      "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote: "Nothing great in the world has been accomplished without passion.",
    author: "Georg Wilhelm",
  },
  {
    quote: "You may delay, but time will not.",
    author: "Benjamin Franklin",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
