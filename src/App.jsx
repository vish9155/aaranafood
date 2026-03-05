import React, { lazy,Suspense,useEffect,useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Loader from './components/Loader';
export default function App() {
  let [loading,setloading]=useState(true)
  let Home = lazy(() => import('./Pages/HomePages'))
  let Contactus = lazy(() => import('./Components/Contactus'))
  let About = lazy(() => import('./Pages/AboutPages'))
  let Privacy = lazy(() => import('./Pages/Policies/PrivacyPolicy'))
  let TermConditions = lazy(() => import('./Pages/Policies/TermsConditions'))
  let Product=lazy(()=>import("./Components/Product"))
   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const timer = setTimeout(() => setloading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />
  return (

    <>
      <BrowserRouter>
       <Navbar />
       <Suspense fallback={Loader}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/privacy-policy' element={<Privacy />} />
          <Route path='/terms-and-conditions' element={<TermConditions />} />
          <Route path='/contact-us' element={<Contactus />} />
          <Route path='/products' element={<Product />} />
        </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}
