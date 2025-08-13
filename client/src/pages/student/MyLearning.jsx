import NavBar from '@/components/NavBar'
import React from 'react'
import CourseSkeleton from '@/components/CourseSkeleton'
import CourseCard from '@/components/CourseCard'

const MyLearning = () => {

    const isLoading = false;
    const MyLearningCourses = [1,2,3,4,5,6];

  return (
    <>
        <NavBar />
        <div className='max-w-4xl mx-auto my-24 px-4 md:px-0'>
            <h1 className='font-bold text-2xl'>
                <div className='my-5'>
                    {
                        isLoading ? 
                        (
                            <CourseSkeleton count={MyLearningCourses.length}/>
                        )
                        :
                        (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                                {
                                    MyLearningCourses.length > 0 ? (
                                        MyLearningCourses.map((course,index)=>{
                                            return(
                                                <CourseCard key={index}/>
                                            )
                                        })
                                    )
                                    :
                                    (
                                        <p>You have not enrolled in any courses yet</p>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </h1>
        </div>
    </>

  )

}

export default MyLearning