import { CART_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";


const NavItems = () => {
  const onlineStatus = useOnlineStatus();

  // We are subscribing to the store using our selector

  const cart = useSelector((store) => {
    return store.cart.items;
  });


  const navItemClasses =
    "px-3 py-1.5 rounded-lg text-sm font-medium bg-white/90 shadow-sm " +
    "hover:bg-red-300 hover:shadow-md hover:-translate-y-0.5 " +
    "transition-all duration-200";

  return (
    <ul className="flex items-center gap-4">
      <li
        className={`px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm 
        ${
          onlineStatus
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {onlineStatus ? "🟢 Online" : "🔴 Offline"}
      </li>

      <li className={navItemClasses}>
        <Link to="/">Home</Link>
      </li>

      <li className={navItemClasses}>
        <Link to="/about">About Us</Link>
      </li>

      <li className={navItemClasses}>
        <Link to="/contact">Contact Us</Link>
      </li>

      <li className={navItemClasses}>
        <Link to="/grocery">Grocery</Link>
      </li>

      <li className={navItemClasses}>
        <Link to="/practice">Practice</Link>
      </li>

  
      <Link to="/cart">
        <li
          className={`${navItemClasses} flex items-center gap-1 cursor-pointer`}
        >
          <img className="w-5 h-5" src={CART_URL} alt="cart" />
          <span>Cart ({cart.length} items)</span>
        </li>
      </Link>
    </ul>
  );
};

export default NavItems;
