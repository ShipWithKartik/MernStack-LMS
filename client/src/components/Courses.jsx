import React from 'react';
import CourseCard from './CourseCard';
import CourseSkeleton from './CourseSkeleton';


const Courses = () => {
  const isLoading = false;
  const courses= [1,2,3,4,5,6];

  return (
    <div className='bg-gray-50 dark:bg-gray-900 min-h-screen py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='font-bold text-3xl text-center mb-10 text-gray-900 dark:text-white'>
          Our Courses
        </h2>
        
        {isLoading ? (
          <CourseSkeleton count={courses.length}/>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Actual course content will go here */}
            {
              courses.map((course,index)=>{
                return(
                  <CourseCard key={index}/>
                )
              })
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;