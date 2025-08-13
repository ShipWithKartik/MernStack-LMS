import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find the Best Courses for You
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          Discover,Learn and Upskill with our wide range of courses
        </p>

        <form className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search for courses"
            className="flex-grow border-none focus:ring-0 px-6 py-3 text-gray-800 dark:text-gray-100 bg-transparent focus:outline-none w-full"
          />
          <button 
            type="submit"
            className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200 whitespace-nowrap"
          >
            Search
          </button>
        </form>
        <Button className='bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200 mt-4'>Explore Courses</Button>
      </div>
    </div>
  );
};

export default HeroSection;
