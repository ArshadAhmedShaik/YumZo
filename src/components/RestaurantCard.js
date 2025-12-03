const RestaurantCard = ({
  resData: {
    info: {
      image: { url },
      name,
      cuisine,
      rating: { rating_text },
      costText: { text: cost },
    },
    order: { deliveryTime },
  },
}) => {
  return (
    <div className="restCard">
      <img className="restCard" src={url} alt={name + " image"} />
      <h3>{name}</h3>
      <h4>
        {cuisine
          .map((item) => {
            return item.name;
          })
          .join(", ")}
      </h4>
      <h4>{rating_text} ⭐</h4>
      <h4>{cost}</h4>
      <h4>Delivery Time: {deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard; 