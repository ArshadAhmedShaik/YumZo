import { useSelector, useDispatch } from "react-redux";
import { CART_URL } from "../utils/constants";
import { emptyCart } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

const Cart = () => {

  const data = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
        console.log(id);
        dispatch(removeItem(id));
  }

  const totalBilling = data.reduce(
    (acc, item) =>
      acc +
      (item?.card?.info?.price ||
        item?.card?.info?.defaultPrice ||
        item?.card?.info?.finalPrice) /
        100,
    0
  );

  return (
    <div className="min-h-screen bg-orange-50 py-10 px-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-orange-600">Your Cart 🛒</h1>
        <button
          onClick={() => dispatch(emptyCart())}
          className="cursor-pointer flex items-center gap-2 bg-white text-orange-600 font-semibold p-2.5 rounded-lg shadow hover:text-orange-700 active:scale-95 transition"
        >
          Clear
          <img src={CART_URL} alt="Cart" className="w-5 h-5" />
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center text-4xl text-red-300 py-20">
          Your Cart is Empty 😔
        </div>
      ) : (
        <>
          <ul className="space-y-6">
            {data.map((item, index) => (

              


              <li
                key={`${item?.card?.info?.id}-${index}`}
                className="flex gap-4 p-4 bg-white rounded-lg border border-orange-100 shadow-sm"
              >
                {item?.card?.info?.imageId && (
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_120,c_fit/${item?.card?.info?.imageId}`}
                    alt={item?.card?.info?.name}
                    className="w-24 h-20 object-cover rounded-md"
                  />
                )}

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center justify-center w-4 h-4 border-2 ${
                        item?.card?.info?.isVeg === 1
                          ? "border-green-600"
                          : "border-red-600"
                      }`}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          item?.card?.info?.isVeg === 1
                            ? "bg-green-600"
                            : "bg-red-600"
                        }`}
                      />
                    </span>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {item?.card?.info?.name}
                    </h2>
                  </div>

                  <span className="text-orange-600 font-semibold text-base">
                    ₹
                    {(item?.card?.info?.price ||
                      item?.card?.info?.defaultPrice ||
                      item?.card?.info?.finalPrice) / 100}
                  </span>

                  {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
                    <span className="text-sm text-gray-600">
                      ⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating} (
                      {
                        item?.card?.info?.ratings?.aggregatedRating
                          ?.ratingCountV2
                      }
                      )
                    </span>
                  ) : (
                    <span className="text-sm text-gray-400">
                      Ratings Unavailable
                    </span>
                  )}

                  {item?.card?.info?.offerTags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {item?.card?.info?.offerTags.map((offer, i) => (
                        <span
                          key={item?.card?.info?.offerIds[i]}
                          style={{ color: offer?.textColor }}
                          className="text-sm font-semibold"
                        >
                          <span style={{ color: "black" }}>{offer?.title}</span>{" "}
                          – {offer?.subTitle}
                        </span>
                      ))}
                    </div>
                  )}

                  {item?.card?.info?.description && (
                    <p className="text-gray-500 text-sm line-clamp-2 mt-1">
                      {item?.card?.info?.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div onClick={() => {
                       return handleRemoveItem(index);
                  }} className="shadow bg-red-200 cursor-pointer rounded-md p-2">❌</div>
                </div>

              </li>






            ))}
          </ul>

          <div className="mt-8 text-right text-xl font-bold text-orange-600">
            Total Billing: ₹{totalBilling.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
