const ItemList = (props) => {
  const data = props?.data;

  return (
    <ul className="px-12 py-10 space-y-12">
      {data?.card?.card?.itemCards.map((arr) => (
        <li
          key={arr?.card?.info?.id}
          className="flex justify-between gap-10 border-b pb-12"
        >
          <div className="flex-1 space-y-5">
            <div className="flex items-center gap-4">
              <span
                className={`inline-flex items-center justify-center w-6 h-6 border-2 ${
                  arr?.card?.info?.isVeg === 1
                    ? "border-green-600"
                    : "border-red-600"
                }`}
              >
                <span
                  className={`w-3.5 h-3.5 rounded-full ${
                    arr?.card?.info?.isVeg === 1
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                />
              </span>

              <span className="font-semibold text-2xl text-gray-900">
                {arr?.card?.info?.name}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold text-gray-800">
                ₹
                {(arr?.card?.info?.price ||
                  arr?.card?.info?.defaultPrice ||
                  arr?.card?.info?.finalPrice) / 100}
              </span>

              {arr?.card?.info?.ratings?.aggregatedRating?.rating ? (
                <span className="text-lg text-gray-600">
                  ⭐ {arr?.card?.info?.ratings?.aggregatedRating?.rating} (
                  {arr?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                </span>
              ) : (
                <span className="text-lg text-gray-400">Ratings Unavailable</span>
              )}
            </div>

            {arr?.card?.info?.offerTags?.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {arr?.card?.info?.offerTags.map((offer, index) => (
                  <span
                    key={arr?.card?.info?.offerIds[index]}
                    style={{ color: offer?.textColor }}
                    className="text-lg font-semibold"
                  >
                    <span style={{
                        color: "black",
                        fontWeight: "bold"
                    }
                    }>{offer?.title}</span> – {offer?.subTitle}
                  </span>
                ))}
              </div>
            )}

            {arr?.card?.info?.description && (
              <p className="text-lg text-gray-500 leading-relaxed line-clamp-3">
                {arr?.card?.info?.description}
              </p>
            )}
          </div>

          {arr?.card?.info?.imageId && (
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${arr?.card?.info?.imageId}`}
              alt={arr?.card?.info?.name}
              className="w-56 h-44 object-cover rounded-2xl"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
