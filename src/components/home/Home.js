import React from "react";
import About from "./About";
import styles from "./Home.module.css";

function Home(props) {
  console.log(props.isActive);
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1>Let us find your</h1>
          <h1 id="lastChild">Forever Food.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <button id="searchNow">Search Now</button>
          <button id="knowMore">Know More</button>
        </div>
      </div>
      <About />
    </>
  );
}

export default Home;
