const Button = ({ data: listOfRestaurants, func: setListOfRestaurants }) => {
  return (
    <button
      className="px-4 py-1.5 rounded-lg bg-red-400 text-white font-medium shadow-sm
                 hover:bg-red-500 hover:-translate-y-0.5 hover:shadow-md
                 transition-all duration-200"
      onClick={() => {
        const filteredList = listOfRestaurants.filter(
          (restaurant) => restaurant?.info?.avgRating > 4.0
        );

        const sortedList = filteredList.sort((a, b) => {
          return Number(a?.info?.avgRating) - Number(b?.info?.avgRating);
        });

        setListOfRestaurants(sortedList);
      }}
    >
      Filter Restaurants
    </button>
  );
};

export default Button;
