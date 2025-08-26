'use client'
import React from 'react'
import { ContainerMain } from './components/ContainerMain'
import { Nav } from './components/Nav'
import Courses from './components/Courses'

const Pages = () => {
  return (
    <ContainerMain>

      <section className='h-screen'>

        <Hero />
        <Courses />







      </section>




    </ContainerMain>
  )
}

export default Pages






function Hero() {
  return (
    <>
      <section className='bg-neutral-100 flex flex-col items-center gap-4 p-4 ' >
        <h1 className='text-neutral-800 text-3xl'>Find the Best Couese for You.</h1>
        <p>Discover, Learn, and Upskill with our wide range of courses</p>
        <div className='rounded-4xl flex ' >
          <div className='bg-blue-900/20 p-2 rounded-l-4xl '>

            <input type="text" className='outline-none mx-2' />
          </div>

          <div className='bg-blue-500/80 text-white text-semibold  p-2 rounded-r-4xl' >
            <button className='cursor-pointer'  >Search</button>
          </div>

        </div>
        <button className='bg-amber-400 rounded-lg px-2 py-1 text-white  w-fit cursor-pointer'>Explore Courses</button>

      </section>
    </>
  )
}