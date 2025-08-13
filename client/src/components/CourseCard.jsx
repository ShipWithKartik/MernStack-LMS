import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';

const CourseCard = () => {
  return (
    <Card className='overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full'>
      <div className='relative'>
        <img 
          src="https://media.geeksforgeeks.org/img-practice/prod/courses/822/Mobile/Content/nextpng_1732621657.png" 
          alt="course" 
          className='w-full h-48 object-cover rounded-t-lg'
        />
      </div>

      <CardContent className='px-5 py-4 space-y-3'>
        <h1 className='font-bold text-lg mb-3 line-clamp-2 h-14'>
          Next.js Complete Course 2024 - From Zero to Hero
        </h1>
        
        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center gap-2'>
            <Avatar className='h-8 w-8'>
              <AvatarImage 
                src="https://github.com/shadcn.png" 
                className='object-cover'
              />
              <AvatarFallback className='text-xs'>JD</AvatarFallback>
            </Avatar>
            <span className='text-sm text-gray-600 dark:text-gray-400'>John Doe</span>
          </div>
          <Badge className='bg-blue-600 dark:bg-blue-700 text-white px-2 py-1 text-xs rounded-full'>Beginner</Badge>
        </div>

        <div className='text-lg font-bold'>
            <span>
                ₹399 
            </span>
        </div>

      </CardContent>
    </Card>
  );
};

export default CourseCard;