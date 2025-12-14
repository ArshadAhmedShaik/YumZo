import mainData from "../utils/mainData.json";
import { useState, useEffect } from "react";

const useListOfRestaurants = () => {
  const [original, setOriginal] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));

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

  return [original, setOriginal, listOfRestaurants, setListOfRestaurants];

};

export default useListOfRestaurants;
