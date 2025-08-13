const CourseSkeleton = ({ count}) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(count)].map((_, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse"
          >
            {/* Thumbnail Placeholder */}
            <div className="h-48 bg-gray-200 dark:bg-gray-700 w-full"></div>
            
            <div className="p-4">
              {/* Title Placeholder */}
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
              
              {/* Description Placeholder */}
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
              
              <div className="flex items-center justify-between">
                {/* Instructor Avatar Placeholder */}
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 mr-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                </div>
                
                {/* Price Placeholder */}
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
              </div>
              
              {/* Button Placeholder */}
              <div className="mt-4 h-10 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
};


export default CourseSkeleton;