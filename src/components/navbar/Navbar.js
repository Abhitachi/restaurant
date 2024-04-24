import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../utils/logo (2).svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <nav class={styles["nav-bar"]}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <h2>Geek Foods</h2>
      </div>
      <div className={styles.pages}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <span
            className={splitLocation[1] === "" ? styles["active"] : styles[""]}
          >
            Home
          </span>
        </Link>
        <Link to="/quote" style={{ textDecoration: "none", color: "inherit" }}>
          <span
            className={
              splitLocation[1] === "quote" ? styles["active"] : styles[""]
            }
          >
            Quote
          </span>
        </Link>
        <Link
          to="restaurant"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span
            className={
              splitLocation[1] === "restaurant" ? styles["active"] : styles[""]
            }
          >
            Restaurants
          </span>
        </Link>
        {/* <span>Foods</span> */}
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span
            className={
              splitLocation[1] === "contact" ? styles["active"] : styles[""]
            }
          >
            Contacts
          </span>
        </Link>
      </div>
      <div>
        <button className={styles.btn}>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
