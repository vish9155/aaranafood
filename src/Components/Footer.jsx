import { Copyright, MapPin, PhoneCall } from 'lucide-react'
import React from 'react'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className='w-full bg-slate-950 text-gray-300 text-white'>
               <div className='max-w-7xl mx-auto px-3 grid grid-cols-1 md:grid-cols-3 gap-8  '>
                 <div className='p-2 sm:p-3 md:p-4'>
                    <NavLink to="/">
                        <img src="/images/logo/logo.png" className='object-cover h-12 sm:h-15 md:h-18' alt="logo" />
                    </NavLink>
                    <p className='p-1 sm:p-2 md:p-3 text-justify'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit atque quis quaerat necessitatibus aliquam repudiandae vero, minima, possimus illum adipisci maxime consequatur similique quo sint? Ad necessitatibus delectus aperiam dolor.
                    </p>
                </div>
                <div className='p-2 sm:p-3 md:p-4'>
                    <h2 className='text-sm sm:text-lg md:text-xl'>Quick Links</h2>
                    <div className='p-2 sm:p-3 md:p-4 block'>
                        <NavLink className={`me-5 mt-4 text-base  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in block`} to="/">
                            Home
                        </NavLink>
                        <NavLink className={`me-5 mt-4 text-base  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in block`} to="/about-us">
                            About Us
                        </NavLink>
                        {/* <NavLink className={`me-5 mt-4 text-base  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in block`} to="/privacy-policy">
                            Privacy Policy
                        </NavLink>
                        <NavLink className={`me-5 mt-4 text-base  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in block`} to="/terms-and-conditions">
                            Term-And-Conditions
                        </NavLink> */}
                        <NavLink className={`me-5 mt-4 text-base  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in block`} to="/contact-us">
                            Contact Us
                        </NavLink>
                        <NavLink className={`me-5 mt-4 text-base  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in block`} to="/products">
                            Products
                        </NavLink>
                    </div>
                </div>
                <div className='p-2 sm:p-3 md:p-4'>
                <h2 className='text-sm sm:text-lg md:text-xl'>Contactus</h2>
                   <div className='p-1 sm:p-2 md:p-3'>
                     <div className='flex'>
                        <div className='w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center'>
                           <MapPin size={24}  />
                        </div>
                        <div className='ms-2'>
                          <h2 className='text-sm sm:text-lg md:text-xl'>Address:-</h2>
                          <p className='text-justify'>3B level - 3 Krishna plaza</p>
                        </div>
                     </div>
                   </div>
                     <div className='p-1 sm:p-2 md:p-3'>
                     <div className='flex'>
                        <div className='w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center'>
                           <FaEnvelope className='text-xl'  />
                        </div>
                        <div className='ms-2'>
                          <h2 className='text-sm sm:text-lg md:text-xl'>Email:-</h2>
                           <NavLink className={` text-base  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in block`} to="mailto:vishaljpkumar4970@gmail.com">
                          vishaljpkumar4970@gmail.com
                        </NavLink>
                        </div>
                     </div>
                   </div>
                     <div className='p-1 sm:p-2 md:p-3'>
                     <div className='flex'>
                        <div className='w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center'>
                           <PhoneCall size={24}  />
                        </div>
                        <div className='ms-2'>
                          <h2 className='text-sm sm:text-lg md:text-xl'>Phone:-</h2>
                           <NavLink className={` text-base  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in block`} to="tel:9155014125">
                          9155014125
                        </NavLink>
                        </div>
                     </div>
                   </div>
                     <div className='p-1 sm:p-2 md:p-3'>
                     <div className='flex'>
                        <div className='w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center'>
                           <FaWhatsapp className='text-xl'  />
                        </div>
                        <div className='ms-2'>
                          <h2 className='text-sm sm:text-lg md:text-xl'>Address:-</h2>
                          <NavLink className={` text-base  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in block`} to="https://wa.me/9155014125">
                          Chat On Whatsapp
                        </NavLink>
                        </div>
                     </div>
                   </div>
                </div>
               </div>
               <hr />
               <div className='p-4 sm:p-5 md:p-6'>
                 <div className='text-center m-auto  flex items-center justify-center '>
                    <div>
                        <Copyright size={24} />
                    </div>
                   <div className='mt-3'>
                     <h2>2026 AiFood. All rights reserved</h2>
                    <p>Develope And Design By <span className='text-orange-900'>Risezonic</span></p>
                   </div>
                 </div>
               </div>
            </div>
            <div className='fixed bottom-30 right-2 realtive cursor-pointer z-50 '>
              <div className='w-14 h-14 rounded-full group  relative bg-slate-900 flex items-center justify-center'>
                <NavLink to={`https://wa.me/9155014125`}   target="_blank"
          rel="noreferrer">
            <span className='bg-slate-800 opacity-30 absolute rounded-full inset-0 animate-ping'></span>
                  <FaWhatsapp className='text-3xl text-green-600 group-hover:scale-130 transition-all duration-300 ease-in' />
                </NavLink>
                
              </div>

            </div>
        </>
    )
}
