import React from "react";
import styles from "./Quote.module.css";
import quotes from "./quotes.json";

export const Card = ({ quote, author }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.quote}>{quote}</h2>
      <p className={styles.author}>{author}</p>
    </div>
  );
};

const Quote = () => {
  return (
    <div className={styles.container}>
      {quotes.map((quote, index) => {
        return <Card key={index} quote={quote.quote} author={quote.author} />;
      })}
    </div>
  );
};

export default Quote;
