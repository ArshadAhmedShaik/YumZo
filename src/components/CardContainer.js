import RestaurantCard from "./RestaurantCard.js";

const CardContainer = ({ data: listOfRestaurants }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {listOfRestaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.info.id}
          resData={restaurant}
          className="h-full"
        />
      ))}
    </div>
  );
};

export default CardContainer;
