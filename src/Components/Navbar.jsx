import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { X, Menu } from 'lucide-react'

export default function Navbar() {
    let [mobile, setmobile] = useState(false)
    let [scroll, setScroll] = useState(false)

    useEffect(() => {
        let scrolled = () => setScroll(window.scrollY > 100)
        window.addEventListener("scroll", scrolled)
        return () => window.removeEventListener("scroll", scrolled)
    }, [])

    let navitems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About Us",
            path: "/about-us"
        },
        {
            title: "Contact Us",
            path: "/contact-us"
        },
        {
            title: "Our Products",
            path: "/products"
        },
    ]

    return (
        <>
            <nav className={`fixed top-0  w-full z-10000 transition-all duration-300 h-18 ease-in ${scroll ? ' text-xl bg-gradient-to-r from-black via-gray-900 to-slate-900 text-white shadow-lg' : 'bg-transparent text-blue-950'}`}>
                <div className='max-7xl mx-auto px-3 flex justify-between items-center'>
                    <NavLink to="/">
                        <img src="/images/logo/logo.png" className='object-cover h-12 sm:h-15 md:h-18' alt="logo" />
                    </NavLink>
                    <div className='hidden md:flex space-x-4'>
                    {
                        navitems.map((item, index) => (
                            <NavLink to={item.path} key={index} className={`me-5 text-xl  text-white hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in `}>
                                {item.title}
                            </NavLink>
                        ))
                    }
                    </div>
                </div>
                <button className='md:hidden right-0 absolute top-4' onClick={() => { setmobile(!mobile) }}>
                    {mobile ? <X size={28} /> : <Menu size={28} />}
                </button>
                {
                    mobile && (
                        <div className='md:hidden bg-black text-white p-5 space-y-4'>
                            <div className='space-y-4'>
                                {
                                    navitems.map((item, index) => (
                                        <NavLink to={item.path} key={index} className={`me-5 text-xl  hover:text-red-600 block hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in `}>
                                            {item.title}
                                        </NavLink>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </nav>
        </>
    )
}
