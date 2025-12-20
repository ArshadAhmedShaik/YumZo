import { useEffect, useState } from "react";
import restaurantMenu from "../utils/restaurantMenu.json";

const useRestaurantMenu = (resId) => {


  const [ resInfo ,setResInfo ] = useState(null);  

  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));

      const array = restaurantMenu?.array;

      const filtered = array.filter((element) => {
        return element.data.cards[2].card.card.info.id === resId;
      });

      setResInfo(filtered);
    } catch (err) {
      console.error("Error fetching restaurant menu:", err);
    }
  };

  return resInfo;
 
};

export default useRestaurantMenu;
