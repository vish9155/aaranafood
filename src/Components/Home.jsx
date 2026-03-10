import React from 'react'
import { NavLink } from 'react-router'
import {  FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { Mail, MapPin, PhoneCall } from 'lucide-react'

export default function Home() {
    return (
        <>
            <section className="relative w-full h-[99vh] md:h-[99vh] overflow-hidden " data-aos="zoom-in-down">

                <img
                    src="/images/ban1.jpeg"

                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* 
                this is used when your image is lighting your text are not clear visible*/}
                <div className="absolute inset-0 bg-black/20"></div>


                <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
                    <h1 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl max-w-4xl leading-snug">
                       Welcome to AI Food – Where Technology Meets Flavor
                    </h1>
                </div>

            </section>
             <section data-aos="zoom-in-right">
                <div className='max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className="order-2 md:order-1 space-y-4">

                        <h2 className='text-center text-xl sm:text-2xl md:text-3xl'>About AI Food International</h2>
                        <div className='p-2 sm:p-3 md:p-4'>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                                AI Food International is a global innovation brand redefining the future of food through artificial intelligence. We combine advanced technology with culinary excellence to create smarter, healthier, and more personalized food solutions for modern lifestyles.
                            </p>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                                AI Food is a next-generation food platform that blends technology with taste. Using the power of artificial intelligence, we analyze preferences, dietary needs, and trends to deliver smarter, healthier, and more personalized food experiences.
                            </p>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                               Our system understands what you love to eat and suggests meals that match your lifestyle. Whether you're looking for healthy options, quick bites, or customized meal plans, AI Food ensures every recommendation feels tailor-made for you.
                            </p>
                        </div>

                    </div>


                    <div className="order-1 md:order-2 relative group overflow-hidden rounded-2xl">
                        <img src="/images/about/aboutintro.jpeg" alt="" className='h-full w-full object-cover group-hover:scale-110' />
                    </div>
                </div>
            </section>
             <section className='max-w-4xl py-12 mx-auto'>
                <div data-aos="flip-up">
                    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 p-5'>

                        <div className='rounded-2xl shadow-lg text-orange-600 shadow-orange-900 z-50 transition-all duration-300 ease-in hover:-translate-y-4'>
                            <span className="text-3xl justify-center flex p-5 items-center">
                                <PhoneCall size={32} className='text-blue-800' />
                            </span>

                            <div className='p-1 sm:p-2 md:p-3'>
                                <h2 className='text-center text-lg sm:text-xl md:text-2xl text-black'>Call Us</h2>
                                <div className='flex items-center justify-center'>
                                    <NavLink to="tel:8663075957" className='text-center text-sm sm:text-base text-blue-700 hover:text-red-600 transition-all duration-300 ease-in py-2'>8663075957</NavLink>
                                </div>
                            </div>

                        </div>
                        <div className='rounded-2xl shadow-lg text-orange-600 shadow-orange-900 z-50 transition-all duration-300 ease-in hover:-translate-y-4'>
                            <span className="text-3xl justify-center flex p-5 items-center">
                                <FaEnvelope className='text-4xl text-red-600' />
                            </span>

                            <div className='p-1 sm:p-2 md:p-3'>
                                <h2 className='text-center text-lg sm:text-xl md:text-2xl text-gray-600'>Email</h2>
                                <div className='flex items-center justify-center'>
                                    <NavLink to="mailto:support@gmail.com" className='text-center text-sm sm:text-base text-blue-800 hover:text-red-600 transition-all duration-300 ease-in py-2'>support@gmail.com</NavLink>
                                </div>
                            </div>

                        </div>
                        <div className='rounded-2xl shadow-lg  text-orange-600 shadow-orange-900 z-50 transition-all duration-300 ease-in hover:-translate-y-4'>
                            <span className="text-3xl justify-center flex p-5 items-center">
                                <FaWhatsapp className='text-4xl text-green-600' />
                            </span>

                            <div className='p-1 sm:p-2 md:p-3'>
                                <h2 className='text-center text-lg sm:text-xl text-black md:text-2xl '>Whatsapp</h2>
                                <div className='flex items-center justify-center'>
                                    <NavLink to="https://wa.me/8663075957" className='text-center text-sm sm:text-base hover:text-red-600  text-blue-700 transition-all duration-300 ease-in py-2'>Chat With Us</NavLink>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
               <section >
                <div className="max-w-5xl mx-auto py-12 px-4 bg-blue-100 ">
                    <h2 className='text-center text-lg sm:text-xl md:text-2xl'>We’re Here for Your Premium Travel Needs</h2>
                    <p className='max-w-5xl mx-auto p-2 sm:p-3 md:p-4 text-gray-600 text-sm sm:text-base text-center'>
                      We're here to help with any inquiries you have about booking your next first-class or business-class flight as well as answering any questions about quotes or providing help with existing reservations. With a first-class flight, you will experience exceptional customer service from initial contact until your flight is over with zero difficulties.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto py-12 px-4 p-3 sm:p-4 md:p-5 grid grid-cols-1 md:grid-cols-2 gap-7">


                    <div className="order-2 md:order-1 space-y-4">

                        <div className="p-3 sm:p-4 md:p-5 z-40 shadow-lg rounded-2xl mt-5 shadow-blue-600 transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in">
                            <div className="flex gap-4">
                                <div className="h-14 w-14 rounded-full bg-gray-600 flex items-center justify-center">
                                    <MapPin size={28} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg sm:text-xl md:text-2xl">Address:-</h2>
                                    <p className="text-sm sm:text-base">
                                        A-16 17662 Irvine Blvd, Suite 9, Tustin, CA 92780
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 sm:p-4 md:p-5 z-40 shadow-lg rounded-2xl mt-5 shadow-blue-600 transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in">
                            <div className="flex gap-4">
                                <div className="h-14 w-14 rounded-full bg-gray-600 flex items-center justify-center">
                                    <Mail size={28} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg sm:text-xl md:text-2xl">Email:-</h2>
                                    <p className="text-sm sm:text-base">
                                        <NavLink
                                            to="mailto:support@gmail.com"
                                            className="text-blue-600 hover:text-red-600  hover:underline transform hover:-translate-x-2 hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in"
                                        >
                                           info@firstclassflight.com
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 sm:p-4 md:p-5 z-40 shadow-lg rounded-2xl mt-5 shadow-blue-600 transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in">
                            <div className="flex gap-4">
                                <div className="h-14 w-14 rounded-full bg-gray-600 flex items-center justify-center">
                                    <PhoneCall size={28} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg sm:text-xl md:text-2xl">Phone:-</h2>
                                    <p className="text-sm sm:text-base">
                                        <NavLink
                                            to="tel:8663075957"
                                            className="text-blue-600 hover:text-red-600  hover:underline transform hover:-translate-x-2 hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in"
                                        >
                                            8663075957
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 sm:p-4 md:p-5 mt-5 z-40 shadow-lg rounded-2xl mt-5 shadow-blue-600 transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in">
                            <div className="flex gap-4">
                                <div className="h-14 w-14 rounded-full bg-gray-600 flex items-center justify-center">
                                    <FaWhatsapp className="text-2xl text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg sm:text-xl md:text-2xl">Whatsapp:-</h2>
                                    <p className="text-sm sm:text-base">
                                        <NavLink
                                            to="https://wa.me/8663075957"
                                            className="text-blue-600 hover:text-red-600  hover:underline transform hover:-translate-x-2 hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in"
                                        >
                                            Chat With Us
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="order-1 md:order-2">
                        <h2 className='text-center text-xl sm:text-2xl md:text-3xl my-6'>Get Any Query</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                className="w-full border border-blue-600 outline-blue-900  p-2 rounded"
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Enter Phone..."
                                className="w-full border border-blue-600 outline-blue-900 p-2 rounded"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email..."
                                className="w-full border border-blue-600 outline-blue-900 p-2 rounded"
                            />
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Enter Your Query..."
                                className="w-full border border-blue-600 outline-blue-900 p-2 rounded"
                            />
                            <button type='submit' className='mx-auto py-3 rounded-xl cursor-pointer bg-blue-700 w-40 text-white hover:bg-blue-900'>
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}
