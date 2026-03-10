import { Copyright, MapPin, PhoneCall } from "lucide-react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-950 text-gray-300 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-3">

          {/* LOGO + ABOUT */}
          <div>
            <NavLink to="/">
              <img
                src="/images/logo/logo.png"
                alt="logo"
                className="h-14 mb-4"
              />
            </NavLink>

            <p className="text-sm leading-relaxed text-gray-400">
              TrainTickets USA is a simple and secure platform that helps
              travelers search train routes, compare schedules, and book train
              tickets online across the United States quickly and easily.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h2>

            <div className="flex flex-col space-y-3 text-sm">
              <NavLink
                className="hover:text-blue-400 transition"
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className="hover:text-blue-400 transition"
                to="/about-us"
              >
                About Us
              </NavLink>

              <NavLink
                className="hover:text-blue-400 transition"
                to="/products"
              >
                Products
              </NavLink>

              <NavLink
                className="hover:text-blue-400 transition"
                to="/contact-us"
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-5">
              Contact Info
            </h2>

            <div className="space-y-4 text-sm">

              <div className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1" size={20} />
                <p className="text-gray-400">
                  3B Level - 3 Krishna Plaza
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <a
                  href="mailto:vishaljpkumar4970@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  vishaljpkumar4970@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <PhoneCall className="text-blue-500" size={20} />
                <a
                  href="tel:9155014125"
                  className="hover:text-blue-400 transition"
                >
                  +91 9155014125
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500 text-lg" />
                <a
                  href="https://wa.me/9155014125"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400 transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-sm text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <Copyright size={16} />
            <span>2026 TrainTicketsUSA. All rights reserved.</span>
          </div>

          <p className="mt-2">
            Developed & Designed by{" "}
            <span className="text-blue-400 font-medium">Risezonic</span>
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/9155014125"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <span className='bg-slate-800 opacity-30 absolute rounded-full inset-0 animate-ping'></span>
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
          <FaWhatsapp className="text-white text-2xl" />
        </div>
      </a>
    </>
  );
}