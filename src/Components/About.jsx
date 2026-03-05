import React from 'react'

export default function About() {
  return (
  <>
  <section className="relative w-full h-[99vh] md:h-[99vh] overflow-hidden " data-aos="zoom-in-down">

                <img
                    src="/images/about/about.jpeg"

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
  </>
  )
}
