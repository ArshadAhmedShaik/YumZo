import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const data = props?.data;

  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    console.log("Header clicked!");
    if (!showItems) {
      setShowItems(true);
    } else {
      setShowItems(false);
    }
  };

  return (
   <div className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      <div
        className={`flex items-center justify-between px-10 py-6 bg-white shadow-md hover:shadow-lg transition cursor-pointer`}
        onClick={handleClick}
      >
        <span className="font-bold text-2xl text-gray-900">
          {data?.card?.card?.title} ({data?.card?.card?.itemCards.length})
        </span>
        <span className={`text-2xl transition-transform ${showItems ? "rotate-180" : ""}`}>
          🔽
        </span>
      </div>

      {showItems && <ItemList data={data} />}
    </div>
  );
};

export default RestaurantCategory;
