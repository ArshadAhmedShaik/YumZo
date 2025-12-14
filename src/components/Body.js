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



 if (onlineStatus === false) {
  return (
    <div
      className="app"
      style = {{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          border: "6px solid #334155",
          borderTop: "6px solid #38bdf8",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      <h2 style={{ marginTop: "20px", fontWeight: "500" }}>
        You’re offline
      </h2>

      <p style={{ color: "#94a3b8", marginTop: "8px" }}>
        Please check your internet connection
      </p>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
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
