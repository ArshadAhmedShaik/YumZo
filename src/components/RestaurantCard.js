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
  className = "",
}) => {
  return (
    <Link
      to={`/restaurant/${id}`}
      className={`block transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
        
        <img
          className="w-full h-40 object-cover shrink-0"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={`${name} image`}
        />

        <div className="p-4 flex flex-col justify-between flex-1">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
            <h4 className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</h4>
            <div className="text-sm text-gray-600 flex flex-wrap gap-2">
              <span>Area: {areaName}</span>
              <span>Locality: {locality}</span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-2 text-sm text-gray-700 font-medium">
            <span>{avgRating} ⭐</span>
            <span>{costForTwo}</span>
            <span>Delivery: {slaString}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
