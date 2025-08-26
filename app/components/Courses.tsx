// 'use client'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { redirect } from 'next/navigation'
// export const Courses = () => {
//     // Fetch courses from your API
//     const [courses, setCourses] = useState([{}])
//     useEffect(() => {
//         fetchCourses()

//     }, [])


//     async function fetchCourses() {
//         const res = await axios.get('http://localhost:3000/api/courses')
//         console.log('res bwlow')
//         const data = res.data.data
//         setCourses(data)
//     }





//     return (
//         <section>

//             <section className="grid grid-cols-3 gap-4  ">

//                 {courses.map((course, index) => (
//                     <div onClick={() => {
//                         console.log('redirect')
//                         redirect(`/course/${course.id}`)
//                     }} className=' bg-neutral-100 rounded-lg overflow-hidden cursor-pointer  ' key={index}>
//                         <section className='w-full h-40 bg-purple-500'>
//                             Course Image

//                         </section>
//                         <section className='p-2'>
//                             <h1 className='text-xl font-semibold'>{course.title} </h1>
//                             <p className='text-sm text-neutral-600' >{course.description} </p>
//                             <div className='flex  justify-between items-center px-2'>
//                                 <p>Rs.{course.price}/- </p>
//                                 <button className='bg-green-400 px-2 py-1 rounded-lg text-white text-sm '>Buy now</button>
//                             </div>

//                         </section>


//                     </div>
//                 ))}
//             </section>
//         </section>
//     )
// }

// export default Courses





// -----------------------------------------------------------





export default async function Courses() {

    const response = await fetch('http://localhost:3000/api/courses');

    if (!response.ok) {
        return <div>Error fetching Courses. Status: {response.status}</div>;
    }

    const courses = await response.json();
    console.log('this is response', courses)


    return (
        <section>

            <section className="grid grid-cols-3 gap-4  ">

                {courses.map((course: any, index: any) => {


                    <div className=' bg-neutral-100 rounded-lg overflow-hidden cursor-pointer  ' key={index}>
                        <section className='w-full h-40 bg-purple-500'>
                            Course Image
                        </section>
                        <section className='p-2'>
                            <h1 className='text-xl font-semibold'>{course.title} </h1>
                            <p className='text-sm text-neutral-600' >{course.description} </p>
                            <div className='flex  justify-between items-center px-2'>
                                <p>Rs.{course.price}/- </p>
                                <button className='bg-green-400 px-2 py-1 rounded-lg text-white text-sm '>Buy now</button>
                            </div>

                        </section>


                    </div>
                }))}
            </section>
        </section>
    )


}


