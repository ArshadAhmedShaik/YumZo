import CardContainer from "./CardContainer.js";
import Button from "./Button.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import Search from "./Search.js";
import mainData from "../utils/mainData.json";

const Body = () => {
  
  const [original, setOriginal] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      
      await new Promise(
        (resolve) => setTimeout(resolve, 400)
      );

      const data = mainData;

      const restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setOriginal(restaurants);
      setListOfRestaurants(restaurants);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <Button data={listOfRestaurants} func={setListOfRestaurants} />
      <Search
        original={original}
        data={listOfRestaurants}
        func={setListOfRestaurants}
      />
      <CardContainer data={listOfRestaurants} />
    </div>
  );
};

export default Body;
