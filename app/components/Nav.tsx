'use client'
import Link from 'next/link';
import React, { useState } from 'react'

export const Nav = () => {

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
                    {isLoggedIn ? (<p>Profile</p>) : (<p>SignIn</p>)}
                </div>
            </header>
        </>
    )
}
