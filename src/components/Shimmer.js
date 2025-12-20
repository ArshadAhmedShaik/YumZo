const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col animate-pulse h-full"
          >
            {/* Image Placeholder */}
            <div className="w-full h-40 bg-gray-300 shrink-0"></div>

            {/* Text Placeholder */}
            <div className="p-4 flex flex-col justify-between flex-1 space-y-2">
              <div className="space-y-1">
                <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="flex gap-2">
                  <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="h-4 bg-gray-300 rounded w-1/5"></div>
                <div className="h-4 bg-gray-300 rounded w-1/5"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
