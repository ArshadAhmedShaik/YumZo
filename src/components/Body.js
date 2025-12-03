import Search from "./Search.js";
import CardContainer from "./CardContainer.js";
import Button from "./Button.js";
import { useState } from "react";
import mockData from "../utils/mockData.js";
import ClearFilter from "./ClearFilter.js";

const Body = () => {
  
 const [listOfRestaurants, setListOfRestaurants] = useState(mockData?.dataArray);
  // whenever a state variable updates, the component re-renders in React
  return (
    <div className="body">
      <Search />
      <Button data = {listOfRestaurants} func = {setListOfRestaurants}/>
      <ClearFilter data = {listOfRestaurants} func = {setListOfRestaurants} />
      <CardContainer data = {listOfRestaurants}/>
    </div>
  );
};

export default Body;