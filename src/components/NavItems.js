import { CART_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="NavItems">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li>
          <img id="shoppingCart" src={ CART_URL } alt="shoppingCart" />{" "}
          <p>Cart</p>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;