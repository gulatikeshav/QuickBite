import React, { useState } from "react";
import { DUMMY_ITEM_IMAGE_URL, IMAGE_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const ItemList = ({ itemData }) => {

  const dispatch = useDispatch();
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div>
      {itemData?.map((itemInfo) => {
        const item = itemInfo?.card?.info;
        const { imageId, name, price, description, id, defaultPrice } = item;


        return (
          <div
            className="flex  flex-col md:flex-row  justify-between  w-full lg:w-8/12 mx-auto my-4 shadow-lg p-6 bg-white"
            key={id}
          >
            <div className="">
              <h2 className="font-bold">{name}</h2>
              <p className="text-gray-700">
                ₹{price / 100 || defaultPrice / 100}
              </p>


              <p className="text-gray-400 py-2">
                {description}
                
              </p>

           
              <button
                className="md:w-32 w-full border rounded-md py-2 bg-red-500 cursor-pointer hover:bg-red-600 text-white"
                onClick={() => dispatch(addItem(item))}
              >
                Add
              </button>
            </div>

            <div className="w-full flex-shrink-0  h-36 md:w-36 md:h-28  mt-3 md:mt-0">
              {imageId ? (
                <img
                  src={IMAGE_CDN_URL + imageId}
                  alt={name}
                  className="w-full h-full rounded-lg"
                />
              ) : (
                <img
                  src={DUMMY_ITEM_IMAGE_URL + imageId}
                  alt={name}
                  className="w-full h-full rounded-lg"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

