

const ShimmerCard = () => {
  return (

    <div
      className="bg-gray-200 grid 
        grid-cols-1 
        gap-4
        place-items-center 
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5 p-4 mt-28"
    >
      {/* Repeating Shimmer Cards */}
      {Array(7)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="border rounded-lg p-2 my-1 relative 
              w-72 h-[18.4rem] 
              md:w-72 md:h-76 
              lg:w-72 lg:h-76 
              xl:w-80 xl:h-80 
              2xl:h-[32rem] 2xl:w-[30rem]
              bg-gray-300 animate-shimmer overflow-hidden"
          >
            {/* Shimmer for Image */}
            <div className="w-full h-48 2xl:h-[22rem] bg-gray-200 rounded-lg mb-4 shimmer"></div>

            {/* Shimmer for Title */}
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 shimmer"></div>

            {/* Shimmer for Subtitle */}
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-4 shimmer"></div>

            {/* Shimmer for Details */}
            <div className="absolute bottom-1 w-full flex justify-between text-gray-400 gap-4 p-2">
              <div className="h-4 w-10 bg-gray-200 rounded shimmer"></div>
              <div className="h-4 w-10 bg-gray-200 rounded shimmer"></div>
              <div className="h-4 w-10 bg-gray-200 rounded shimmer"></div>
            </div>
          </div>
        ))}
    </div>



       
  );
};

export default ShimmerCard;
