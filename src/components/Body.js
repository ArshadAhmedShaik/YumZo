import CardContainer from "./CardContainer.js";
import Button from "./Button.js";
import Shimmer from "./Shimmer.js";
import Search from "./Search.js";
import useListOfRestaurants from "../utils/useListOfRestaurants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const data = useListOfRestaurants();
  const original = data[0];
  const listOfRestaurants = data[2];
  const setListOfRestaurants = data[3];


  if (!onlineStatus) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        
        <div className="w-14 h-14 border-4 border-slate-700 border-t-sky-400 rounded-full animate-spin" />

       
        <h2 className="mt-5 text-lg font-medium text-gray-800">
          You’re offline
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Please check your internet connection
        </p>
      </div>
    );
  }


  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }


  return (
    <div className="space-y-6 px-4 md:px-6 lg:px-8">
  
      <Button data={listOfRestaurants} func={setListOfRestaurants} />

      <Search
        original={original}
        data={listOfRestaurants}
        func={setListOfRestaurants}
      />


      <CardContainer data={listOfRestaurants} />
    </div>
  );
};

export default Body;
