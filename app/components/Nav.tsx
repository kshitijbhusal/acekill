'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';


export const Nav = () => {
    const sessiom = useSession()

    const navItems = [
        { element: "Home", href: "/" },
        { element: "Courses", href: "/courses" },
        { element: "Categories", href: "/categories" },
        { element: "Cart", href: "/cart" },

    ];

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <>



            <header className=' max-w-7xl mx-auto border, bg-green-500 flex items-center justify-between px-2 py-4 '>
                <div className='text-white rounded-full'>
                    E-Learning

                </div>
                <section className='space-x-6 '>
                    {navItems.map((items, index) => {
                        return (
                            <Link key={index} className='' href={items.href}>{items.element}</Link>)
                    })}
                </section>

                <div>
                    {sessiom.status == 'authenticated' ? (
                        <div>
                            <p>Profile</p>
                            <button className='bg-stone-500 px-2 py-1 rounded-md text-white' onClick={() => signOut()}>logout</button>
                        </div>
                    ) : (<button className='bg-blue-400 px-2 py-1 rounded-md text-white cursor-pointer' onClick={() => {
                        signIn()
                        console.log("first")
                    }}>SignIn</button>)}
                </div>
            </header>

        </>
    )
}
