const ShimmerUI = () => {
    return (
      <div className="flex flex-wrap mx-10 my-10">
        {/* Top Section */}
        <div className="w-full min-h-40 mr-4 mb-2 p-2 pb-3 rounded-lg border-2 shimmer-bg"></div>
  
        {/* Small Buttons */}
        <div className="flex flex-wrap my-8">
          <div className="w-44 h-10 border-2 shimmer-bg mx-5"></div>
          <div className="w-44 h-10 border-2 shimmer-bg mx-5"></div>
          <div className="w-44 h-10 border-2 shimmer-bg mx-5"></div>
          <div className="w-44 h-10 border-2 shimmer-bg mx-5"></div>
          <div className="w-44 h-10 border-2 shimmer-bg mx-5"></div>
          <div className="w-44 h-10 border-2 shimmer-bg mx-5"></div>
        </div>
  
        {/* Main Cards Section */}
        <div className="Shimmerui_container flex flex-wrap">
          {Array(20).fill("").map((_, index) => (
            <div key={index} className="w-64 h-72 mr-4 mb-3 p-2 pb-3 rounded-lg border-2 shimmer-bg"></div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ShimmerUI;
  