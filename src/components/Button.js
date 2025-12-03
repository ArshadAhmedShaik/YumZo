const Button = ({
    data: listOfRestaurants,
    func: setListOfRestaurants,
}) => {
        return (
            <button className="filter-btn" onClick={() => {
                const filteredList  = listOfRestaurants.filter((restaurant) => {
                                const {
                                    info: {
                                        rating: {
                                            rating_text: rating,
                                        },
                                    },
                                } = restaurant;
                                return Number(rating) < 4.0;
                });
                const sortedList = filteredList.sort((a, b) => {
                    const ratingA = Number(a?.info?.rating?.rating_text);
                    const ratingB = Number(b?.info?.rating?.rating_text);
                    return ratingA - ratingB;
                });
                setListOfRestaurants(sortedList);
            }}>Worst Rated Restaurants</button>
        );
};

export default Button;