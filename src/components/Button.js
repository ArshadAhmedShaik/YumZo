const Button = ({
    data: listOfRestaurants,
    func: setListOfRestaurants,
}) => {
        return (
            <button className="filter-btn" onClick={() => {
                const filteredList  = listOfRestaurants.filter((restaurant) => {
                                const {
                                    info: {
                                        avgRating: rating
                                    },
                                } = restaurant;
                                return rating > 4.0;
                });
                const sortedList = filteredList.sort((a, b) => {
                    const ratingA = Number(a?.info?.avgRating);
                    const ratingB = Number(b?.info?.avgRating);
                    return ratingA - ratingB;
                });
                setListOfRestaurants(sortedList);
            }}>Filter Restaurants</button>
        );
};

export default Button;