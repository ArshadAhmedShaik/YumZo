import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  return resInfo === null || resInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-4">

        {/* Restaurant Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {resInfo[0]?.data?.cards[0]?.card?.card?.text}
        </h1>

        {/* Restaurant Info Card */}
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

        {/* Menu Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {
            resInfo[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards[2]?.card?.card?.title
          }
        </h1>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resInfo[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards[2]?.card?.card?.itemCards?.map((element) => (
              <div
                key={element.card.info.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
              >
                <img
                  className="w-full h-40 object-cover rounded-md mb-3"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${element.card.info.imageId}`}
                  alt={element.card.info.name}
                />

                <p className="font-semibold text-gray-800">
                  {element.card.info.name}
                </p>

                <p
                  className={`text-sm mt-1 ${
                    element.card.info.isVeg === 1
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {element.card.info.isVeg === 1 ? "🌱 Veg" : "🍗 Non-Veg"}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
