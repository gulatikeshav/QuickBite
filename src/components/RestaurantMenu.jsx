import React, { useEffect, useState } from "react";
import { IMAGE_CDN_URL, RESTAURANT_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const fetchMenu = async () => {
    const data = await fetch(
      RESTAURANT_MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setMenuData(json.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (menuData === null) return <ShimmerMenu />;

  const {
    avgRatingString,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    name,
    sla,
  } = menuData?.cards[2]?.card?.card?.info;

  const { lastMileTravel } = sla;

  const categories =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  return (
    <div className="md:mt-28 mt-20 pb-16">


      <div className="flex flex-col md:flex-row  md:justify-start items-center w-full lg:w-8/12 mx-auto my-2 p-4  bg-black text-white shadow-lg">
        <img
          src={IMAGE_CDN_URL + cloudinaryImageId}
          alt="restaurant-logo"
          className="w-60 h-48 rounded-lg border border-white"
        />
        <div className="px-4 flex flex-col justify-center ">
          <h1 className="text-xl md:text-4xl">{name}</h1>
          <h3 className="text-gray-500 pb-5 ml-1">{cuisines.join(",")}</h3>
          <div className="flex  gap-2  p-1">
            <span className="flex items-center justify-between bg-gray-400 w-12 px-2 ">
              {avgRatingString}
              <IoStar />
            </span>
            <span> |</span>
            <span>{(lastMileTravel / 100).toFixed(2)}Km</span>
            <span>| </span>
            <span>{costForTwoMessage}</span>
          </div>
        </div>
      </div>

      {/* accordion */}

      <div>
        {categories?.map((category, index) => {
          return (
            <RestaurantCategory
              data={category}
              key={category.card.card.title}
              showItems={index === showIndex}
              changeIndex={() =>
                setShowIndex(index === showIndex ? null : index)
              }
            />
          );
        })}
      </div>


    </div>
  );
};

export default RestaurantMenu;
