import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import RestaurantMenuShimmer from "./RestaurantMenuShimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import ItemCategoryContainer from "./ItemCategoryContainer.js";


const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  return resInfo === null || resInfo.length === 0 ? (
    <RestaurantMenuShimmer />
  ) : (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-4">

        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {resInfo[0]?.data?.cards[0]?.card?.card?.text}
        </h1>

       
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            {resInfo[0]?.data?.cards[2]?.card?.card?.info?.name}
          </h2>

          <p className="text-gray-500 mt-1">
            {resInfo[0]?.data?.cards[2]?.card?.card?.info?.city},{" "}
            {resInfo[0]?.data?.cards[2]?.card?.card?.info?.locality},{" "}
            {resInfo[0]?.data?.cards[2]?.card?.card?.info?.areaName}
          </p>

          <div className="mt-4 space-y-1 text-gray-700">
            <p>
              💰{" "}
              {resInfo[0]?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
            </p>
            <p>
              🍽️{" "}
              {resInfo[0]?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
            </p>
            <p>
              ⭐ Rating:{" "}
              {resInfo[0]?.data?.cards[2]?.card?.card?.info?.avgRatingString}
            </p>
            <p>
              ⏱️ Delivery Time:{" "}
              {resInfo[0]?.data?.cards[2]?.card?.card?.info?.sla?.deliveryTime} mins
            </p>
          </div>
        </div>



        <ItemCategoryContainer resInfo = {resInfo}/>

      </div>
    </div>
  );
};

export default RestaurantMenu;
