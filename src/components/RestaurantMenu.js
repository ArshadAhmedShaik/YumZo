import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import restaurantMenu from "../utils/restaurantMenu.json";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

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

  return resInfo === null || resInfo.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="app" id="aboutApp">
      <div id="restaurantDetails" className="container">
  
        <h1 id="restaurantTitle">
          {resInfo[0]?.data?.cards[0]?.card?.card?.text}
        </h1>

        
        <div id="restaurantInfo">
          <h2 id="restaurantName">
            {resInfo[0]?.data?.cards[2]?.card?.card?.info?.name}
          </h2>
          <p id="restaurantLocation">
            {resInfo[0]?.data?.cards[2]?.card?.card?.info?.city},{" "}
            {resInfo[0]?.data?.cards[2]?.card?.card?.info?.locality},{" "}
            {resInfo[0]?.data?.cards[2]?.card?.card?.info?.areaName}
          </p>
          <p id="restaurantCost">
            {resInfo[0]?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
          </p>
          <p id="restaurantCuisines">
            {resInfo[0]?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
          </p>
          <p id="restaurantRating">
            Rating:{" "}
            {resInfo[0]?.data?.cards[2]?.card?.card?.info?.avgRatingString}
          </p>
          <p id="restaurantDeliveryTime">
            Delivery Time:{" "}
            {resInfo[0]?.data?.cards[2]?.card?.card?.info?.sla?.deliveryTime}{" "}
            mins
          </p>
        </div>

       
        <h1 id="menuTitle">
          {
            resInfo[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards[2]?.card?.card?.title
          }
        </h1>

        <div id="menuItems">
          {resInfo[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (element) => (
              <div className="menuCard" key={element.card.info.id}>
                <p className="menuName">
                  {element.card.info.name} -{" "}
                  {element.card.info.isVeg === 1 ? "Veg" : "Non-Veg"}
                </p>
                <img
                  className="menuImage"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${element.card.info.imageId}`}
                  alt={element.card.info.name}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
