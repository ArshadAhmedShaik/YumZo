import RestaurantCard from "./RestaurantCard.js";
import { withClosedLabel } from "./RestaurantCard.js";
import { withOpenLabel } from "./RestaurantCard.js";
import { idMatch } from "./RestaurantCard.js";

const CardContainer = ({ data: listOfRestaurants }) => {

  const ClosedRestaurantCard = withClosedLabel(RestaurantCard);
  const OpenRestaurantCard = withOpenLabel(RestaurantCard);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {listOfRestaurants.map((restaurant) => {
    

        if (restaurant?.info?.availability?.opened===true) {
          return <OpenRestaurantCard key={restaurant.info.id}
              resData={restaurant} />;
        }  

        return <ClosedRestaurantCard key={restaurant.info.id}
              resData={restaurant} />
        
      })}
    </div>
  );
};

export default CardContainer;
