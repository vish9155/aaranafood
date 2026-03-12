import React from 'react'

export default function About() {
    return (
        <>
            <section className="relative w-full h-[99vh] md:h-[99vh] overflow-hidden " data-aos="zoom-in-down">

                <img
                    src="/images/about.jpeg"


                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* 
                this is used when your image is lighting your text are not clear visible*/}
                <div className="absolute inset-0 bg-black/40"></div>


                <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
                    <h1 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl max-w-4xl leading-snug">
                        Welcome to AI Food – Where Technology Meets Flavor
                    </h1>
                </div>

            </section>
            <section data-aos="zoom-in-right">
                <div className='max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className="order-2 md:order-1 space-y-4">

                        <h2 className='text-center text-xl sm:text-2xl md:text-3xl'>About Us – Aaranafood</h2>
                        <div className='p-2 sm:p-3 md:p-4'>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                                Aaranafood is a dedicated supplier of high-quality bakery ingredients designed to support bakeries, food manufacturers, restaurants, and commercial kitchens. Our goal is simple—provide reliable ingredients that help food businesses create products with consistent taste, texture, and quality.
                            </p>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                                At Aaranafood, we understand that the quality of ingredients directly impacts the final product. That is why we focus on delivering carefully selected bakery ingredients such as cocoa powder, fruit paste, fruit-based toppings, pizza flour, sausage, and other essential baking ingredients used by professionals in the food industry.
                            </p>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                                With a commitment to quality and consistency, Aaranafood aims to become a trusted partner for businesses that rely on premium ingredients for baking, dessert production, and food preparation.
                            </p>
                        </div>

                    </div>


                    <div className="order-1 md:order-2 relative group overflow-hidden rounded-2xl">
                        <img src="/images/aboutintro.jpeg" alt="" className='h-full w-full group-hover:scale-110' />
                    </div>
                </div>
            </section>
            <section>
                <div className='max-w-6xl mx-auto my-10 px-3'>
                    <h2 className="text-center text-xl sm:text-2xl md:text-3xl py-3 ">Our Product Range</h2>
                    <div className="p-2 sm:p-3 md:p-4">
                        <p className='text-center text-sm sm:text-base text-gray-600  max-w-3xl mx-auto'>Food businesses choose Aaranafood because of our focus on dependable ingredients and professional service. We aim to provide products that meet the needs of commercial kitchens and large-scale food production</p>
                    </div>
                    <div className="p-2 sm:p-3 md:p-4">
                        <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
                            <div className='overflow-hidden relative group rounded-2xl'>
                                <img src="/images/Cocoa Powder (Natural & Alkalized).jpg.jpeg" className='h-48 object-cover w-full group-hover:scale-110' alt="" />
                                <div><h2 className="text-center text-lg sm:text-xl md:text-2xl py-3 ">Cocoa Powder (Natural & Alkalized)</h2></div>
                            </div>
                            <div className='overflow-hidden relative group rounded-2xl'>
                                <img src="/images/Fruit-paste.jpeg" className='h-48 object-cover w-full group-hover:scale-110' alt="" />
                                <h2 className="text-center text-lg sm:text-xl md:text-2xl py-3 ">Fruit Paste</h2>
                            </div>
                            <div className='overflow-hidden relative group rounded-2xl'>
                                <img src="/images/Fruits-based-topping1.jpeg" className='h-48 object-cover w-full group-hover:scale-110' alt="" />
                                <h2 className="text-center text-lg sm:text-xl md:text-2xl py-3 ">Fruit Based Toppings</h2>
                            </div>
                            <div className='overflow-hidden relative group rounded-2xl'>
                                <img src="/images/Dessert-Toppings.jpeg" className='h-48 object-cover w-full group-hover:scale-110' alt="" />
                                <h2 className="text-center text-lg sm:text-xl md:text-2xl py-3 ">Dessert Toppings</h2>
                            </div>
                            <div className='overflow-hidden relative group rounded-2xl'>
                                <img src="/images/Pizza-Flour.jpeg" className='h-48 object-cover w-full group-hover:scale-110' alt="" />
                                <h2 className="text-center text-lg sm:text-xl md:text-2xl py-3 ">Pizza Flour</h2>
                            </div>
                            <div className='overflow-hidden relative group rounded-2xl'>
                                <img src="/images/Sausage1.jpeg" className='h-48 object-cover w-full group-hover:scale-110' alt="" />
                                <h2 className="text-center text-lg sm:text-xl md:text-2xl py-3 ">Sausage</h2>
                            </div>

                        </div>
                        <p className='text-center text-sm sm:text-base text-gray-600  max-w-xl mx-auto py-10'>Our mission is to make ingredient sourcing easier for bakeries and food manufacturers while maintaining high product standards.</p>



                    </div>
                </div>

            </section>
            <section>
                <div className='max-w-4xl mx-auto px-3 '>
                    <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-6">Our Commitment to Quality</h2>
                    <div className=''>
                        <p className="text-center text-sm sm:text-base text-gray-600 mt-6 leading-relaxed">Quality is at the heart of everything we do at Aaranafood. We understand that bakeries and food businesses rely on ingredients that perform consistently in every batch. From cocoa powder used in cakes and brownies to fruit toppings used in desserts and pastries, every product we supply is chosen with strict attention to quality standards.</p>
                        <p className="text-center text-sm sm:text-base text-gray-600 mt-6 leading-relaxed">Quality is at the heart of everything we do at Aaranafood. We understand that bakeries and food businesses rely on ingredients that perform consistently in every batch. From cocoa powder used in cakes and brownies to fruit toppings used in desserts and pastries, every product we supply is chosen with strict attention to quality standards.</p>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto py-16 px-4">
                <div data-aos="flip-down" className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 sm:p-8 border border-gray-100">

                        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
                            Why Choose Aaranafood
                        </h2>
                        <p className="text-center text-sm sm:text-base text-gray-600 mt-6 leading-relaxed"><p className="text-center text-sm sm:text-base text-gray-600 py-6  leading-relaxed">Food businesses choose Aaranafood because of our focus on dependable ingredients and professional service. We aim to provide products that meet the needs of commercial kitchens and large-scale food production.</p></p>
                        <ul className="space-y-3 list-disc list-inside text-gray-700">
                            <li>High Quality Bakery Ingredients</li>
                            <li>Reliable product consistency</li>
                            <li>Ingredients suitable for commercial baking</li>
                            <li>Carefully selected product range</li>
                            <li>Trusted supply for food businesses</li>
                        </ul>

                        <p className="text-center text-sm sm:text-base text-gray-600 mt-6 leading-relaxed">
                            Aaranafood focuses on providing dependable ingredients that help bakeries and food manufacturers maintain consistent product quality.
                        </p>

                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 sm:p-8 border border-gray-100">

                        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
                            Supporting Food Businesses
                        </h2>
                        <p className="text-center text-sm sm:text-base text-gray-600 py-6 leading-relaxed">Aaranafood works closely with a variety of food industry professionals. Our ingredients are widely used by:</p>
                        <ul className="space-y-3 list-disc list-inside text-gray-700">
                            <li>Professional Bakeries</li>
                            <li>Cake and dessert manufacturers</li>
                            <li>Restaurants and Cafés</li>
                            <li>Pizza Outlets</li>
                            <li>Food production companies</li>
                            <li>Dessert Brands</li>
                        </ul>

                        <p className="text-center text-sm sm:text-base text-gray-600 mt-6 leading-relaxed">
                            By supplying essential bakery ingredients and food preparation products, Aaranafood helps businesses streamline their ingredient sourcing and maintain consistent product quality.
                        </p>

                    </div>

                </div>
            </section>
            <section>
                <div className='max-w-4xl mx-auto px-3 '>
                    <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-6">Our Vision</h2>
                    <div className=''>
                        <p className="text-center text-sm sm:text-base text-gray-600 py-6 leading-relaxed">The vision of Aaranafood is to become a trusted name in the bakery ingredient industry by providing high-quality products that support the growth of bakeries, restaurants, and food brands. We aim to build long-term relationships with our customers by focusing on reliability, quality, and professional service.</p>
                        
                    </div>
                </div>
            </section>
        </>
    )
}
