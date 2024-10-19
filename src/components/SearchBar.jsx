import React, { useState } from "react";

const SearchBar = ({ listOfRestaurants, setFilterListOfRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const data = listOfRestaurants?.filter((resName) =>
      resName?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    setFilterListOfRestaurants(data);
  };

  const handleEnterPress = (e)=>{
    if(e.key === "Enter"){
      handleSearch()
    }
  }

  return (
    <div className="items-center gap-4 my-6 flex md:flex-row flex-col justify-center mt-32 ">
      <input
        type="text"
        placeholder="search a restaurant you want..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e)=>handleEnterPress(e)}
        className="border w-9/12 md:w-5/12  p-3 outline-none mb-1 md:mb-0 rounded-lg text-lg"
      />
      <button
        className="border w-20 p-3 rounded-lg bg-red-500 hover:bg-red-600 text-white"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
