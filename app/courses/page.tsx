'use client'
import React, { useEffect, useState } from 'react'
import { ContainerMain } from '../components/ContainerMain'
import Courses from '../components/Courses'

const page = () => {

    const [searchparams, setSearchparams] = useState("")
    const [courses, setCourses] = useState([{}])
    useEffect(() => {
        fetchCourses("")
        console.log('searchparams is ', searchparams)
    }, [searchparams])

    const fetchCourses = async (p0: string) => {
        const response = await fetch(`http://localhost:3000/api/courses?${searchparams}`)

        if (!response) {
            return

        }

        const body = await response.json()
        console.log('body is is ', body)
        setCourses(body.data)




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

                                <div className='flex  gap-2'>
                                    <input

                                        onClick={
                                            () => {
                                                setSearchparams("category=Programming")
                                            }}
                                        id='programming' type="checkbox" />

                                    <label id='programming' htmlFor="prorgamming">Programming</label>
                                </div>


                                <div className='flex  gap-2'>
                                    <input type="checkbox" />
                                    <label htmlFor="">Design</label>
                                </div>

                                <div className='flex  gap-2'>
                                    <input type="checkbox" />
                                    <label htmlFor="">Data Science</label>
                                </div>
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
                                            <h1 className='text-xl font-semibold'>{course.title} </h1>
                                            <p className='text-sm text-neutral-600' >{course.description} </p>
                                            <div className='flex  justify-between items-center px-2'>
                                                <p>Rs.{course.price}/- </p>
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