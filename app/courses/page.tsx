'use client'
import React, { useEffect, useState } from 'react'
import { ContainerMain } from '../components/ContainerMain'
import Courses from '../components/Courses'
import { useSearchParams, useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()
    const params = useSearchParams()
    const category = params.get('category')


    const handleCheckboxChange = (category: any, filter: any) => {


        const currentParams = new URLSearchParams(params.toString())

        const currentValues = currentParams.getAll(category)
        currentParams.append(category, String(filter))
        router.push(`?${currentParams}`)

    }




    //----------------------------
    const categoryOptions = ['Programming', 'Design', 'Devops', 'Dell']
    const teacherOptions = ['Harkirat Singh', 'Anurag Sing', 'Hitesh Chaudhary', 'Sarthak Sharma']



    const categories = [
        {
            name: "category",
            domain: {

                title: "Filter by Category",
                type: "checkbox",
                options: categoryOptions
            }
        },
        {
            name: "teacher",
            domain: {

                title: "Filter by Teacher",
                type: "checkbox",
                options: teacherOptions
            }
        },
    ]





    const [courses, setCourses] = useState([{}])

    useEffect(() => {
        fetchCourses()
        console.log('use effect ran once')

    }, [params])

    const fetchCourses = async () => {
        const response = await fetch(`http://localhost:3000/api/courses`)

        if (!response) {
            return

        }

        const body = await response.json()
        const courses = body.data;
        const filteredCourses = courses.filter((course: any) => {

            if (!category) return true;
            return course.category === category

        })

        setCourses(filteredCourses)
        console.log('courses is', filteredCourses)

    }

    return (
        <>
            <ContainerMain>
                <div className='h-screen '>
                    <div className=' py-4'>
                        <h1 className=' text-4xl text-center font-bold ' >Availabel Courses</h1>

                    </div>

                    <section className='flex  p-2 gap-x-2 h-fit'>
                        <aside className='border-2 border-stone-400 rounded-md   h-72 w-64 block p-2 '>
                            <p className='bg-stone-300 border-b-2  '> Apply Filtes:</p>
                            <div className='bg-stone-200 p-2'>

                                {categories.map((category, index) => {
                                    return <div key={index}>
                                        <p>{category.name} </p>
                                        {category.domain.options.map((filter, index) => {
                                            return <div key={index} className='bg-green-400' >
                                                <input onClick={() => {
                                                    handleCheckboxChange(category.name, filter)
                                                }} type="checkbox" name="" id={filter} />
                                                <label htmlFor={filter} >{filter} </label>

                                            </div>
                                        })}

                                    </div>
                                })}

                            </div>
                        </aside>
                        <div className=' w-full'>
                            <div className='bg-white flex justify-end' >
                                <p>short by</p>

                            </div>
                            <div className='p-4 border-2 border-stone-400 rounded-md '>
                                {courses.map((course, index) => (
                                    <div className='bg-neutral-100 rounded-lg overflow-hidden cursor-pointer  ' key={index}>
                                        <section className='w-full h-40 bg-purple-500'>
                                            Course Image
                                        </section>
                                        <section className='p-2'>
                                            <h1 className='text-xl font-semibold'>{course?.title} </h1>
                                            <p className='text-sm text-neutral-600' >{course?.description} </p>
                                            <div className='flex  justify-between items-center px-2'>
                                                <p>Rs.{course?.price}/- </p>
                                                <button className='bg-green-400 px-2 py-1 rounded-lg text-white text-sm '>Buy now</button>
                                            </div>

                                        </section>


                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>



                </div>

            </ContainerMain>
        </>
    )
}

export default page