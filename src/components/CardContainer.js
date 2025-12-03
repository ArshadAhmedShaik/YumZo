import RestaurantCard from "./RestaurantCard.js";

const CardContainer = ({
  data: listOfRestaurants
}) => {
  return (
    <div id="cardContainer">
      {listOfRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
      ))}
    </div>
  );
};

export default CardContainer;
