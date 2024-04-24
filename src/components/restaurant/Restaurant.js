import React, { useState } from "react";
import styles from "./Restaurant.module.css";
import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "./restaurantData";

const Restaurant = () => {
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState(0);
  const [filteredData, setFilteredData] = useState(restaurantData);

  console.log(restaurantData);

  const handleChange = (e) => {
    const searchText = e.target.value;
    const ratingVal = e.target.value;
    setQuery(searchText);
    setRating(ratingVal);

    const filtered = restaurantData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.rating >= rating
    );
    setFilteredData(filtered);
  };

  const handleRatingChange = (e) => {
    const ratingVal = e.target.value;
    console.log(ratingVal, "ratingvalue");
    setRating(ratingVal);

    const filtered = restaurantData.filter((item) => item.rating >= rating);
    console.log(filtered);
    setFilteredData(filtered);
  };
  const resData = query || rating ? filteredData : restaurantData;

  return (
    <>
      <div className={styles.rest}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.searchText}
            placeholder="Search restaurants"
            onChange={handleChange}
          />
          <input
            type="number"
            className={styles.rateBox}
            min={0}
            max={5}
            step={0.5}
            value={rating}
            onChange={handleRatingChange}
          />
        </div>
        <div className={styles["rest-container"]}>
          {resData.map((hotel, index) => {
            return (
              <RestaurantCard
                key={index}
                name={hotel.name}
                stars={hotel.rating}
                location={hotel.address}
                city={hotel.address_line_2}
                type={hotel.type_of_food}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Restaurant;
