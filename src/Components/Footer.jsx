import { Copyright, MapPin, PhoneCall } from "lucide-react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-purple-950/95 via-purple-900/90 to-purple-800 
text-purple-300 mt-20 border-t border-purple-500/20 
text-white px-4 py-2 hover:shadow-lg transition pt-16 pb-10">
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

            <p className="text-sm leading-relaxed text-white">
              Aarana International focuses on providing dependable ingredients that help bakeries and food manufacturers maintain consistent product quality.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h2>

            <div className="flex flex-col space-y-3 text-sm">
              <NavLink
                className="hover:text-purple-400 transition"
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className="hover:text-purple-400 transition"
                to="/about-us"
              >
                About Us
              </NavLink>

              <NavLink
                className="hover:text-purple-400 transition"
                to="/products"
              >
                Products
              </NavLink>

              <NavLink
                className="hover:text-purple-400 transition"
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
                <MapPin className="text-purple-500 mt-1" size={32} />
                <p className="text-white">
                  3B Level-3 ,Krishna Plaza,
                  kh. No.414 Block-A
                  Road No.4 Mahipalpur
                  New delhi -110037, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-500" />
                <a
                  href="mailto:Impex@aifood.in "
                  className="hover:text-purple-400 transition"
                >
                  Impex@aifood.in 
                </a>
              </div>

              <div className="flex items-center gap-3">
                <PhoneCall className="text-purple-500" size={20} />
                <a
                  href="tel:9990707280"
                  className="hover:text-purple-400 transition"
                >
                  +91 9990707280
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500 text-lg" />
                <a
                  href="https://wa.me/9990707280"
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
            <Copyright size={16} className="text-white"/>
            <span className="text-white">2026 AARNA International. All rights reserved.</span>
          </div>

          <p className="mt-2 text-white">
            Developed & Designed by{" "}
            <span className="text-purple-400 font-medium">Risezonic</span>
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/9990707280"
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