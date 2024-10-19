import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="mt-24 md:mt-28  ">
      {/* Shimmer for the header */}
      <div
        className="flex lg:flex-row flex-col lg:justify-start lg:gap-20 items-center w-10/12 lg:w-8/12 mx-auto my-2 lg:p-4 bg-gray-200 
          animate-shimmer text-xl cursor-pointer  shadow-md p-4"
      >
        <span className="font-bold bg-gray-300 h-36 lg:h-36 w-10/12 mx-auto  rounded  bg-shimmer"></span>
        <span className="bg-gray-300 h-8 lg:h-20 lg:w-32 rounded w-10/12 mx-auto mt-2  lg:mt-0 bg-shimmer"></span>
      </div>

      {/* Repeating shimmer skeletons for menu items */}
      {Array(6)
        .fill("")
        .map((_, index) => (
          <div
            className="flex flex-col md:flex-row justify-between w-10/12 lg:w-8/12 mx-auto my-4 shadow-lg p-6 bg-gray-200"
            key={index}
          >
            {/* Shimmer for text content */}
            <div className="w-full">
              <div className="font-bold bg-gray-300 h-6 w-2/3 mb-2 rounded-lg animate- bg-shimmer"></div>
              <div className="bg-gray-300 h-5 w-1/4 mb-2 rounded-lg animate- bg-shimmer"></div>
              <div className="bg-gray-300 h-4 w-2/4 mb-4 rounded-lg animate- bg-shimmer"></div>

              {/* Shimmer for Add button */}
              <div className="md:w-32 w-full h-10 bg-gray-300 rounded-md animate-shimmer bg-shimmer"></div>
            </div>

            {/* Shimmer for image */}
            <div className="w-full flex-shrink-0 h-36 md:w-36 md:h-28 mt-3 md:mt-0">
              <div className="w-full h-full bg-gray-300 rounded-lg animate-shimmer bg-shimmer"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerMenu;
