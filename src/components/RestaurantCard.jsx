import React from "react";
import { IoStar } from "react-icons/io5";
import { IMAGE_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { avgRating, cloudinaryImageId, costForTwo, cuisines, name, sla } =
    restaurant?.info;

  const {lastMileTravelString } = sla;

  return (
    <>
      <img
        src={
          IMAGE_CDN_URL +
          cloudinaryImageId
        }
        alt="restaurant-logo"
        className="w-full h-48 2xl:h-[22rem] rounded-lg pb-2"
      />
      <h1 className="font-medium ">{name}</h1>
      <h3 className="text-gray-500">{cuisines.slice(0, 6).join(", ")}</h3>

      <div className="flex justify-between absolute bottom-1 text-gray-500 gap-4">
        <span className="flex items-center ">
          {avgRating}
          <IoStar />
        </span>
        <span>&#x2022; </span>

        <span>{lastMileTravelString}</span>
        <span>&#x2022; </span>
        <span>{costForTwo}</span>
      </div>
    </>
  );
};

export default RestaurantCard;
