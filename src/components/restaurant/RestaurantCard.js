import { Rating } from "@mui/material";
import React from "react";
import { IoIosRestaurant } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./Restaurant.module.css";

const RestaurantCard = ({ name, stars, location, city, type }) => {
  return (
    <div className={styles["menu-body"]}>
      <div className={styles["menu-container"]}>
        <div className={styles.top}>
          <h3>{name}</h3>
          <Rating value={stars} />
        </div>
        <p>
          <MdLocationOn />
          {location},{city}
        </p>
        <div className={styles.footer}>
          <h4>
            <IoIosRestaurant size="1.5rem" />
            <span>{type}</span>
          </h4>
          <Link href="#" style={{ textDecoration: "none", color: "blue" }}>
            Visit Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
