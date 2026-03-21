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
            <nav className={`fixed top-0  w-full z-10000 transition-all duration-300 h-18 ease-in ${scroll ? 'bg-gradient-to-r from-purple-950/95 via-purple-500 to-purple-800 ' : 'bg-transparent text-purple-950'}`}>
                <div className='max-7xl mx-auto px-3 flex justify-between items-center'>
                    <NavLink to="/" className={'ms-3'}>
                        <img src="/images/logo/logo.png" className='object-cover h-12 sm:h-14 md:h-16' alt="logo" />
                    </NavLink>
                    <div className='hidden md:flex space-x-4'>
                    {
                        navitems.map((item, index) => (
                            <NavLink to={item.path} key={index} className={`me-5 text-xl ms-5  text-white ${scroll ? 'hover:text-purple-900':"hover:text-purple-500"} hover:underline hover:decoration-2 hover:decoration-purple-800 transition-all duration-300 ease-in `}>
                                {item.title}
                            </NavLink>
                        ))
                    }
                    </div>
                    <button className='p-3 px-6 bg-purple-500 rounded-xl text-lime-50'>
                    <NavLink to={'tel:9990707280'}>Order Now</NavLink>
                </button>
                </div>
                
                <button className='md:hidden right-0 absolute top-4 text-white' onClick={() => { setmobile(!mobile) }}>
                    {mobile ? <X size={28} /> : <Menu size={28} />}
                </button>
                {
                    mobile && (
                        <div className='md:hidden bg-slate-950 text-white p-5 space-y-4'>
                            <div className='space-y-4'>
                                {
                                    navitems.map((item, index) => (
                                        <NavLink to={item.path} key={index} className={`me-5 text-xl  hover:text-purple-900 block hover:underline hover:decoration-2 hover:decoration-purple-800 transition-all duration-300 ease-in `}>
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
