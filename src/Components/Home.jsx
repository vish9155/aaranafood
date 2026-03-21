import React from 'react'
import { NavLink } from 'react-router'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { Mail, MapPin, PhoneCall } from 'lucide-react'

export default function Home() {
    return (
        <>
            <section className="relative w-full h-[99vh]  overflow-hidden " data-aos="zoom-in-down">

                <img
                    src="/images/bann1.jpeg"

                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* 
                this is used when your image is lighting your text are not clear visible*/}
                {/* <div className="absolute inset-0 bg-black/20"></div> */}


                <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
                    <h1 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl max-w-4xl leading-snug">
                        Premium Bakery Ingredients Supplier – Aarana International
                    </h1>
                </div>

            </section>
            <section data-aos='zoom-in-left'>
                <div className='max-w-5xl px-3 mx-auto py-10 animated-bounce'>
                    <p className='text-center text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                        Aarana International is a trusted supplier of premium bakery ingredients designed for professional bakeries, food manufacturers, restaurants, and dessert brands. We provide high-quality cocoa powder, fruit paste, fruit based toppings, pizza flour, sausage, and other essential bakery ingredients that help businesses maintain consistent taste, texture, and product quality.
                    </p>
                    <p className='text-center text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                        With a strong focus on quality and reliability, Aarana International ensures that every ingredient meets industry standards and supports commercial food production. Our products are widely used by bakeries, cafés, pizza outlets, and food processing businesses looking for dependable baking ingredients.
                    </p>

                </div>
            </section>
            <section data-aos="zoom-in-right">
                <div className='max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                   <div className="order-2 md:order-1 space-y-4">

                        <h2 className='text-purple-600 text-center text-xl sm:text-2xl md:text-3xl'>About Us – Aarana International</h2>
                        <div className='p-2 sm:p-3 md:p-4'>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                               Aarana International is a dedicated supplier of high-quality bakery ingredients designed to support bakeries, food manufacturers, restaurants, and commercial kitchens. Our goal is simple—provide reliable ingredients that help food businesses create products with consistent taste, texture, and quality.
                            </p>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                               At Aarana International, we understand that the quality of ingredients directly impacts the final product. That is why we focus on delivering carefully selected bakery ingredients such as cocoa powder, fruit paste, fruit-based toppings, pizza flour, sausage, and other essential baking ingredients used by professionals in the food industry.
                            </p>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                              With a commitment to quality and consistency, Aarana International aims to become a trusted partner for businesses that rely on premium ingredients for baking, dessert production, and food preparation.
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
                    <h2 className="text-center text-xl sm:text-2xl text-purple-600 md:text-3xl py-3 ">Our Product Range</h2>
                    <div className="p-2 sm:p-3 md:p-4">
                        <p className='text-center text-sm sm:text-base text-gray-600  max-w-3xl mx-auto'>Aarana International offers a carefully selected range of bakery ingredients that are widely used in baking, confectionery production, dessert preparation, and commercial food manufacturing.</p>
                    </div>
                    <div className="p-2 sm:p-3 md:p-4">
                        <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
                            <div className='overflow-hidden relative group rounded-2xl'>
                                <img src="/images/Cocoa Powder (Natural & Alkalized).jpg.jpeg" className='h-48 object-cover w-full group-hover:scale-110' alt="" />
                                <div><h2 className="text-center text-lg text-purple-600 sm:text-xl md:text-2xl py-3 ">Cocoa Powder (Natural & Alkalized)</h2></div>
                            </div>
                            <div className='overflow-hidden relative group rounded-2xl'>
                                <img src="/images/Fruit-paste.jpeg" className='h-48 object-cover w-full group-hover:scale-110' alt="" />
                                <h2 className="text-center text-lg text-purple-600 sm:text-xl md:text-2xl py-3 ">Fruit Paste</h2>
                            </div>
                            <div className='overflow-hidden relative group rounded-2xl'>
                                <img src="/images/Fruits-based-topping1.jpeg" className='h-48 object-cover w-full group-hover:scale-110' alt="" />
                                <h2 className="text-center text-lg text-purple-600 sm:text-xl md:text-2xl py-3 ">Fruit Based Toppings</h2>
                            </div>
                            <div className='overflow-hidden relative group rounded-2xl'>
                                <img src="/images/Dessert-Toppings.jpeg" className='h-48 object-cover w-full group-hover:scale-110' alt="" />
                                <h2 className="text-center text-lg text-purple-600 sm:text-xl md:text-2xl py-3 ">Dessert Toppings</h2>
                            </div>
                            <div className='overflow-hidden relative group rounded-2xl'>
                                <img src="/images/Pizza-Flour.jpeg" className='h-48 object-cover w-full group-hover:scale-110' alt="" />
                                <h2 className="text-center text-lg text-purple-600 sm:text-xl md:text-2xl py-3 ">Pizza Flour</h2>
                            </div>
                            <div className='overflow-hidden relative group rounded-2xl'>
                                <img src="/images/Sausage1.jpeg" className='h-48 object-cover w-full group-hover:scale-110' alt="" />
                                <h2 className="text-center text-lg text-purple-600 sm:text-xl md:text-2xl py-3 ">Sausage</h2>
                            </div>

                        </div>
                        <p className='text-center text-sm sm:text-base text-gray-600  max-w-xl mx-auto py-10'>Each product is designed to deliver excellent flavor, consistency, and performance in professional kitchens and bakeries.</p>

                        <div className='p-2 sm:p-3 md:p-4'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">



                                <div className="bg-white rounded-2xl border border-white shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">

                                    <div className="overflow-hidden">
                                        <img
                                            src={'/images/Pizza-Flour-for-Professional-Kitchens.jpeg'}
                                            alt={''}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                                        />
                                    </div>

                                    <div className="p-5">

                                        <h3 className="text-lg font-semibold mb-2 ">
                                            Pizza Flour for Professional Kitchens
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-4 text-justify">
                                            Our pizza flour is specially formulated to deliver the perfect dough texture required for authentic pizzas. Aarana International pizza flour ensures excellent elasticity, strong gluten structure, and consistent baking performance
                                        </p>



                                    </div>

                                </div>
                                <div className="bg-white rounded-2xl border border-white shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">

                                    <div className="overflow-hidden">
                                        <img
                                            src={'/images/Cocoa-Powder-Supplier.jpeg'}
                                            alt={''}
                                            className="w-full h-48  object-cover group-hover:scale-110 transition duration-300"
                                        />
                                    </div>

                                    <div className="p-5">

                                        <h3 className="text-lg font-semibold mb-2 ">
                                            Cocoa Powder Supplier
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-4 text-justify">
                                            Aarana International supplies premium natural and alkalized cocoa powder used in cakes, brownies, chocolate desserts, and bakery products. Our cocoa powder provides rich flavor, deep color, and smooth texture, making it ideal for professional baking and confectionery production.
                                        </p>



                                    </div>

                                </div>
                                <div className="bg-white rounded-2xl border border-white shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">

                                    <div className="overflow-hidden">
                                        <img
                                            src={'/images/Fruit Toppings and Fruit Paste.jpg.jpeg'}
                                            alt={''}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                                        />
                                    </div>

                                    <div className="p-5">

                                        <h3 className="text-lg font-semibold mb-2 ">
                                            Fruit Toppings and Fruit Paste
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-4 text-justify">
                                            Fruit based toppings and fruit paste from Aarana International are widely used in cakes, pastries, ice creams, and desserts. These ingredients add vibrant flavor, appealing color, and smooth consistency, helping bakeries and dessert brands create high-quality products
                                        </p>



                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>

            </section>
           <section className="max-w-6xl mx-auto py-16 px-4">
  <div data-aos="flip-down" className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 sm:p-8 border border-gray-100">
      
      <h2 className="text-center text-xl sm:text-2xl text-purple-600 md:text-3xl font-semibold mb-6">
        Why Choose Aarana International
      </h2>

      <ul className="space-y-3 list-disc list-inside text-gray-700">
        <li>High Quality Bakery Ingredients</li>
        <li>Consistent Taste and Performance</li>
        <li>Suitable for Commercial Baking</li>
        <li>Trusted by Food Businesses</li>
        <li>Reliable Ingredient Supply</li>
      </ul>

      <p className="text-center text-sm sm:text-base text-gray-600 mt-6 leading-relaxed">
        Aarana International focuses on providing dependable ingredients that help bakeries and food manufacturers maintain consistent product quality.
      </p>

    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 sm:p-8 border border-gray-100">
      
      <h2 className="text-center text-xl sm:text-2xl text-purple-600 md:text-3xl font-semibold mb-6">
        Industries We Serve
      </h2>

      <ul className="space-y-3 list-disc list-inside text-gray-700">
        <li>Professional Bakeries</li>
        <li>Cake Manufacturers</li>
        <li>Restaurants and Cafés</li>
        <li>Pizza Outlets</li>
        <li>Food Processing Companies</li>
        <li>Dessert Brands</li>
      </ul>

      <p className="text-center text-sm sm:text-base text-gray-600 mt-6 leading-relaxed">
        Aarana International supplies bakery ingredients to a wide range of businesses including
      </p>

    </div>

  </div>
</section>
            <section className='max-w-4xl py-12 mx-auto'>
                <div data-aos="flip-up">
                    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 p-5'>

                        <div className='rounded-2xl shadow-lg text-orange-600 shadow-orange-900 z-50 transition-all duration-300 ease-in hover:-translate-y-4'>
                            <span className="text-3xl justify-center flex p-5 items-center">
                                <PhoneCall size={32} className='text-purple-800' />
                            </span>

                            <div className='p-1 sm:p-2 md:p-3'>
                                <h2 className='text-purple-600 text-center text-lg sm:text-xl md:text-2xl text-black'>Call Us</h2>
                                <div className='flex items-center justify-center'>
                                    <NavLink to="tel:9990707280" className='text-center text-sm sm:text-base text-purple-700 hover:text-purple-900 transition-all duration-300 ease-in py-2'>9990707280</NavLink>
                                </div>
                            </div>

                        </div>
                        <div className='rounded-2xl shadow-lg text-orange-600 shadow-orange-900 z-50 transition-all duration-300 ease-in hover:-translate-y-4'>
                            <span className="text-3xl justify-center flex p-5 items-center">
                                <FaEnvelope className='text-4xl text-purple-900' />
                            </span>

                            <div className='p-1 sm:p-2 md:p-3'>
                                <h2 className='text-purple-600 text-center text-lg sm:text-xl md:text-2xl text-gray-600'>Email</h2>
                                <div className='flex items-center justify-center'>
                                    <NavLink to="mailto:Impex@aifood.in " className='text-center text-sm sm:text-base text-purple-800 hover:text-purple-900 transition-all duration-300 ease-in py-2'>Impex@aifood.in </NavLink>
                                </div>
                            </div>

                        </div>
                        <div className='rounded-2xl shadow-lg  text-orange-600 shadow-orange-900 z-50 transition-all duration-300 ease-in hover:-translate-y-4'>
                            <span className="text-3xl justify-center flex p-5 items-center">
                                <FaWhatsapp className='text-4xl text-green-600' />
                            </span>

                            <div className='p-1 sm:p-2 md:p-3'>
                                <h2 className='text-purple-600 text-center text-lg sm:text-xl text-black md:text-2xl '>Whatsapp</h2>
                                <div className='flex items-center justify-center'>
                                    <NavLink to="https://wa.me/9990707280" className='text-center text-sm sm:text-base hover:text-purple-900  text-purple-700 transition-all duration-300 ease-in py-2'>Chat With Us</NavLink>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
             <section >
                           <div className=" mx-auto py-12 px-4 bg-purple-100 ">
                               <h2 className='text-purple-600 text-center text-lg sm:text-xl md:text-2xl'>Your Trusted Source for Premium Bakery Ingredients</h2>
                               <p className='max-w-5xl mx-auto p-2 sm:p-3 md:p-4 text-gray-600 text-sm sm:text-base text-center'>
                                At Aarana International, we are committed to supporting bakeries, restaurants, and food manufacturers with high-quality bakery ingredients. If you have questions about our products, bulk ingredient supply, or business partnerships, our team is always ready to assist. We focus on providing dependable ingredients that help food businesses maintain consistent taste, quality, and production efficiency.
                               </p>
                           </div>
                           <div className="p-3 sm:p-4 md:p-5 grid grid-cols-1 md:grid-cols-2 gap-7">
           
           
                               <div className="order-2 md:order-1 space-y-4">
           
                                   <div className="p-3 sm:p-4 md:p-5 z-40 shadow-lg rounded-2xl mt-5 shadow-purple-600 transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in">
                                       <div className="flex gap-4">
                                           <div className="h-14 w-14 rounded-full bg-gray-600 flex items-center justify-center">
                                               <MapPin size={28} className="text-white" />
                                           </div>
                                           <div>
                                               <h2 className="text-lg sm:text-xl md:text-2xl">Address:-</h2>
                                               <p className="text-sm sm:text-base">
                                                   3B Level-3 ,Krishna Plaza,
kh. No.414 Block-A
Road No.4 Mahipalpur
New delhi -110037, India
                                               </p>
                                           </div>
                                       </div>
                                   </div>
           
                                   <div className="p-3 sm:p-4 md:p-5 z-40 shadow-lg rounded-2xl mt-5 shadow-purple-600 transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in">
                                       <div className="flex gap-4">
                                           <div className="h-14 w-14 rounded-full bg-gray-600 flex items-center justify-center">
                                               <Mail size={28} className="text-white" />
                                           </div>
                                           <div>
                                               <h2 className="text-lg sm:text-xl md:text-2xl">Email:-</h2>
                                               <p className="text-sm sm:text-base">
                                                   <NavLink
                                                       to="mailto:Impex@aifood.in "
                                                       className="text-purple-600 hover:text-purple-900  hover:underline transform hover:-translate-x-2 hover:decoration-2 hover:decoration-purple-800 transition-all duration-300 ease-in"
                                                   >
                                                     Impex@aifood.in 
                                                   </NavLink>
                                               </p>
                                           </div>
                                       </div>
                                   </div>
           
                                   <div className="p-3 sm:p-4 md:p-5 z-40 shadow-lg rounded-2xl mt-5 shadow-purple-600 transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in">
                                       <div className="flex gap-4">
                                           <div className="h-14 w-14 rounded-full bg-gray-600 flex items-center justify-center">
                                               <PhoneCall size={28} className="text-white" />
                                           </div>
                                           <div>
                                               <h2 className="text-lg sm:text-xl md:text-2xl">Phone:-</h2>
                                               <p className="text-sm sm:text-base">
                                                   <NavLink
                                                       to="tel:9990707280"
                                                       className="text-purple-600 hover:text-purple-900  hover:underline transform hover:-translate-x-2 hover:decoration-2 hover:decoration-purple-800 transition-all duration-300 ease-in"
                                                   >
                                                       9990707280
                                                   </NavLink>
                                               </p>
                                           </div>
                                       </div>
                                   </div>
           
                                   <div className="p-3 sm:p-4 md:p-5 mt-5 z-40 shadow-lg rounded-2xl shadow-purple-600 transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in">
                                       <div className="flex gap-4">
                                           <div className="h-14 w-14 rounded-full bg-gray-600 flex items-center justify-center">
                                               <FaWhatsapp className="text-2xl text-white" />
                                           </div>
                                           <div>
                                               <h2 className="text-lg sm:text-xl md:text-2xl">Whatsapp:-</h2>
                                               <p className="text-sm sm:text-base">
                                                   <NavLink
                                                       to="https://wa.me/9990707280"
                                                       className="text-purple-600 hover:text-purple-900  hover:underline transform hover:-translate-x-2 hover:decoration-2 hover:decoration-purple-800 transition-all duration-300 ease-in"
                                                   >
                                                       Chat With Us
                                                   </NavLink>
                                               </p>
                                           </div>
                                       </div>
                                   </div>
           
                               </div>
           
           
                               <div className="order-1 md:order-2">
                                   <h2 className='text-purple-600 text-center text-xl sm:text-2xl md:text-3xl my-6'>Get Any Query</h2>
                                   <form className="space-y-4">
                                       <input
                                           type="text"
                                           name="name"
                                           placeholder="Enter Name"
                                           className="w-full border border-purple-600 outline-purple-900  p-2 rounded"
                                       />
                                       <input
                                           type="text"
                                           name="phone"
                                           placeholder="Enter Phone..."
                                           className="w-full border border-purple-600 outline-purple-900 p-2 rounded"
                                       />
                                       <input
                                           type="email"
                                           name="email"
                                           placeholder="Enter Email..."
                                           className="w-full border border-purple-600 outline-purple-900 p-2 rounded"
                                       />
                                       <textarea
                                           name="message"
                                           rows={5}
                                           placeholder="Enter Your Query..."
                                           className="w-full border border-purple-600 outline-purple-900 p-2 rounded"
                                       />
                                       <button type='submit' className='mx-auto py-3 rounded-xl cursor-pointer bg-purple-700 w-40 text-white hover:bg-purple-900'>
                                           Submit
                                       </button>
                                   </form>
                               </div>
           
                           </div>
                       </section>
        </>
    )
}
