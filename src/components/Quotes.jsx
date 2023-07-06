import React, { useEffect, useState } from "react";
import "../Styles/Quotes.scss";
const Qoutes = () => {
  const [qoute, setQoute] = useState({
    title: "",
    author: "",
  });
  const { title, author } = qoute;

  const [tweet, tweetQoute] = useState("");
  useEffect(() => {
    fetchQoute();
  }, []);
  function handleClick() {
    fetchQoute();
  }
  function randomNumber(length) {
    return Math.floor(Math.random() * length + 1);
  }
  //   console.log();
  async function fetchQoute() {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      const qouteTitle = data[randomNumber(data.length)].text;
      const qouteAuthor = data[randomNumber(data.length)].author;
      setQoute({
        title: qouteTitle,
        author: qouteAuthor,
      });
    } catch (error) {
      console.log("Erorr", error);
    }
  }
  function fetchTweet() {
    tweetQoute(title);
  }
  return (
    <div id="quote-box">
      <h1 id="text fade-out">{title}</h1>
      <p id="author">
        <span>-</span>
        {author}
      </p>
      <button id="new-quote" onClick={handleClick}>
        New Qoute
      </button>
      <buton id="tweet-quote" onClick={fetchTweet}>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            tweet
          )}`}
          target="_blank"
        >
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </buton>
    </div>
  );
};

export default Qoutes;
