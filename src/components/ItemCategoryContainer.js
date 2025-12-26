import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const ItemCategoryContainer = (props) => {

  const [showIndex, setShowIndex] = useState(-1);

  const cards =
    props?.resInfo[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards;

  const filtered = cards.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="space-y-4 py-10">
      {filtered.map((data, index) => (
        // controlled-Component

        <RestaurantCategory
          key={data?.card?.card?.categoryId}
          data={data}
          showItems={index === showIndex ? true : false}
          showIndex={showIndex}
          setShowIndex={setShowIndex}
          index={index}
        />

      ))}
    </div>
  );
};

export default ItemCategoryContainer;
