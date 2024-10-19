import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_API_URL } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [filterListOfRestaurants, setFilterListOfRestaurants] = useState([]);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API_URL);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(listOfRestaurants === null ) return <ShimmerCard />

  
  return (
    <div className="pb-16  ">
      <SearchBar
        setFilterListOfRestaurants={setFilterListOfRestaurants}
        listOfRestaurants={listOfRestaurants}
      />

      <div
        className=" grid 
          grid-cols-1 
          gap-4
          place-items-center 
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          2xl:grid-cols-5
        "
      >
        {filterListOfRestaurants?.length > 0 &&
          filterListOfRestaurants.map((restaurant) => {
            return (
              <div
                key={restaurant.info.id}
                className=" border rounded-lg p-2 my-1 relative text-sm 
                  w-72 h-[18.4rem] 
                  md:w-72 md:h-76 
                  lg:w-76 lg:h-80 lg:text-lg 
                  xl:w-80 xl:h-80 
                  2xl:h-[32rem] 2xl:w-[30rem] 2xl:text-2xl"
              >
                <Link to={"/restaurant/" + restaurant.info.id}>
                  <RestaurantCard restaurant={restaurant} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
