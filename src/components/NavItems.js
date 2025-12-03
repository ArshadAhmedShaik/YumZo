import { CART_URL } from "../utils/constants";

const NavItems = () => {
  return (
    <div className="NavItems">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>
          <img id="shoppingCart" src={ CART_URL } alt="shoppingCart" />{" "}
          <p>Cart</p>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;