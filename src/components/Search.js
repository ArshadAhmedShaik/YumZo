import { useState } from "react";

const Search = ({ original, data: listOfRestaurants, func: setListOfRestaurants }) => {
    
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search 🔍"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setListOfRestaurants(
            original.filter((restaurant) => {
              return restaurant?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            })
          );
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
