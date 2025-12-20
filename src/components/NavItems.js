import { CART_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const NavItems = () => {
  const onlineStatus = useOnlineStatus();

  const navItemClasses =
    "px-3 py-1.5 rounded-lg text-sm font-medium bg-white/90 shadow-sm " +
    "hover:bg-red-300 hover:shadow-md hover:-translate-y-0.5 " +
    "transition-all duration-200";

  return (
    <ul className="flex items-center gap-4">

     
      <li
        className={`px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm 
        ${onlineStatus ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
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

      {/* Cart */}
      <li
        className={`${navItemClasses} flex items-center gap-1 cursor-pointer`}
      >
        <img className="w-5 h-5" src={CART_URL} alt="cart" />
        <span>Cart</span>
      </li>

    </ul>
  );
};

export default NavItems;
