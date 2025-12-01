import React from "react";
import ReactDOM from "react-dom/client";
import dataObj from "./dataObj.js";

const logoURL = new URL("./assets/logo.png", import.meta.url).href;
const shoppingCart = new URL("./assets/shopping-cart.png", import.meta.url)
  .href;
const sampleRest = new URL("./assets/sample.webp", import.meta.url).href;

/*
    components:
    - Header
      - Logo 
      - NavItems 
    - Body 
      - Search 
      - CardContainer
        - RestaurantCard
          - Img
          - Name of Restaurant, Star Rating, Cuisines, etc;
    - Footer Component 
        - Copyright
        - Links
        - Address
        - Contact 
*/

const NavItems = () => {
  return (
    <div className="NavItems">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>
          <img id="shoppingCart" src={shoppingCart} alt="shoppingCart" />{" "}
          <p>Cart</p>
        </li>
      </ul>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="logo">
      <img id="logo" src={logoURL} alt="logo" />
      <h1>YumZo!</h1>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavItems />
    </div>
  );
};

const styleCard = {};

/*
  Whenever u want to pass dynamic data to a react functional component, then pass it as props
*/

// destructuring on the fly :)

const RestaurantCard = ({resData: {
        info: {
           image: {
              url
           },
           name,
           cuisine,
           rating: {
               rating_text
           },
           costText: {
               text:cost
           }
        }
  }}) => {
  // console.log(props); just a JS object at the end of the day :)

// deconstruction on the go


  return (
    <div className="restCard" style={styleCard}>
      <img
        className="restCard"
        src={url}
        alt={name + " image"}
      />
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
    </div>
  );
};

const CardContainer = () => {
  return (
    <div id="cardContainer">
   
      {
        // whenever using a map, always include a prop key
        dataObj.dataArray.map((restaurant) => (
            <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))
      }

    </div>
  );
};

const styleSearch = {
      color: "indianred",
}

const Search = () => {
  return <div className="search" style={styleSearch}><h2>Search 🔎</h2></div>;
};

const Body = () => {
  return (
    <div className="body">
      <Search />
      <CardContainer />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerLeft">
          <h2>Contact Us:</h2>
          <h4>shaik.arshad.dev@gmail.com</h4>
          <h4>Phone: +91 xxxxxxxxx</h4>
          {/* {[<h4 key="1">Hello1</h4>, <h4 key="2">Hello2</h4>]} */}
        </div>

        <div className="footerCenter">
          <h4>Made with ❤️ by Arshad!</h4>
        </div>

        <div className="footerRight">
          <h2>Address:</h2>
          <h4>Hyderabad, Telangana</h4>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);

/*
  config driven UI: Controlling how our UI looks like with the help of data 
  driven by config: JSON data 
*/
