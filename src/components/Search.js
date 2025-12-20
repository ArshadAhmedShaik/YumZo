import { useState } from "react";

const Search = ({ original, data: listOfRestaurants, func: setListOfRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search 🔍"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="px-3 py-1.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
      />
      <button
        className="px-4 py-1.5 rounded-lg bg-blue-400 text-white font-medium shadow-sm
                   hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-md
                   transition-all duration-200"
        onClick={() =>
          setListOfRestaurants(
            original.filter((restaurant) =>
              restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            )
          )
        }
      >
        Search
      </button>
    </div>
  );
};

export default Search;
