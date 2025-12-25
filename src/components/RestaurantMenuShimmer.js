const RestaurantMenuShimmer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-pulse">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="h-10 w-1/2 bg-gray-300 rounded-md"></div>

        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <div className="h-8 w-1/3 bg-gray-300 rounded-md"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded-md"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded-md"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded-md"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded-md"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded-md"></div>
          </div>
        </div>

        <div className="space-y-10">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="flex justify-between items-center px-10 py-6 bg-amber-100">
                <div className="h-6 w-1/3 bg-gray-300 rounded-md"></div>
                <div className="h-6 w-6 bg-gray-300 rounded-md"></div>
              </div>

              <ul className="px-12 py-10 space-y-12">
                {[...Array(3)].map((_, i) => (
                  <li
                    key={i}
                    className="flex justify-between gap-10 border-b pb-12"
                  >
                    <div className="flex-1 space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-gray-400"></div>
                        <div className="h-6 w-40 bg-gray-300 rounded-md"></div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="h-5 w-24 bg-gray-300 rounded-md"></div>
                        <div className="h-5 w-32 bg-gray-200 rounded-md"></div>
                      </div>

                      <div className="h-4 w-3/4 bg-gray-200 rounded-md"></div>
                      <div className="h-4 w-1/2 bg-gray-200 rounded-md"></div>
                    </div>

                    <div className="w-56 h-44 bg-gray-300 rounded-2xl"></div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuShimmer;
