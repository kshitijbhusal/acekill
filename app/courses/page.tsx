import React from 'react'
import { ContainerMain } from '../components/ContainerMain'
import Courses from '../components/Courses'

const page = () => {
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
                                    <input type="checkbox" />
                                    <label htmlFor="">Programming</label>
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
                                <Courses />
                            </div>
                        </div>
                    </section>



                </div>

            </ContainerMain>
        </>
    )
}

export default page