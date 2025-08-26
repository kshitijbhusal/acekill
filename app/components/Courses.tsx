import { cache } from 'react';

// Cache the fetch call to ensure it runs only once
const fetchData = cache(async () => {
    const res = await fetch('http://localhost:3000/api/courses', {
        cache: 'force-cache', // Ensures data is cached
    });
    const data = await res.json();
    return data;
});

// Server Component
export default async function page() {
    const res = await fetchData();
    const courses = res.data


    return (

        <section>

            <section className="grid grid-cols-3 gap-4   ">


                {courses.map((course: any, index: any) => (



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
                ))}
            </section>
        </section>
    );
}





