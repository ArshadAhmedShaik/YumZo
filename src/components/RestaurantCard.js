import { Link } from "react-router-dom";

const RestaurantCard = ({
  resData: {
    info: {
      cloudinaryImageId,
      name,
      id,
      cuisines,
      avgRating,
      costForTwo,
      areaName,
      locality,
      sla: { slaString },
    },
  },
}) => {
  return (
    <Link to={`/restaurant/${id}`} className="restLink">
      <div className="restCard">
        <img
          className="restCard"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt={name + " image"}
        />
        <h3>{name}</h3>
        <h4>
          {cuisines
            .map((item) => {
              return item;
            })
            .join(", ")}
        </h4>
        <h4>Area: {areaName}</h4>
        <h4>Locality: {locality}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>Delivery Time: {slaString}</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
