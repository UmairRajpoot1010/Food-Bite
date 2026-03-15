import React from "react";
import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[#3B1F0E] text-white pt-10 sm:pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-3 sm:mb-4">
              <img src={logo} alt="Food Bite" className="h-[50px] sm:h-[64px] w-auto object-contain" />
            </Link>
            <p className="text-gray-300 text-[13px] sm:text-[14px] leading-relaxed">
              Premium Pakistani fast food — burgers, pizza, broast, and more. Taste the crunch, feel the bite!
            </p>
            <div className="flex gap-2.5 sm:gap-3 mt-4 sm:mt-5">
              <a href="#" className="bg-[#F5A623] p-2 sm:p-2.5 rounded-full hover:bg-[#e09515] transition-colors">
                <Facebook size={16} className="text-[#3B1F0E]" />
              </a>
              <a href="#" className="bg-[#F5A623] p-2 sm:p-2.5 rounded-full hover:bg-[#e09515] transition-colors">
                <Instagram size={16} className="text-[#3B1F0E]" />
              </a>
              <a href="https://wa.me/923420564739" target="_blank" rel="noopener noreferrer"
                className="bg-[#25D366] p-2 sm:p-2.5 rounded-full hover:bg-[#1ebe5b] transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Montserrat'] font-black text-[13px] sm:text-[14px] text-[#F5A623] mb-3 sm:mb-5 uppercase tracking-wide">Quick Links</h3>
            <div className="space-y-2 sm:space-y-3">
              {[
                { label: "Home",      to: "/" },
                { label: "Menu",      to: "/menu" },
                { label: "About Us",  to: "/about" },
                { label: "Order Now", to: "/contact" },
                { label: "Your Cart", to: "/cart" },
              ].map((link) => (
                <Link key={link.label} to={link.to} className="block text-gray-300 text-[13px] sm:text-[14px] hover:text-[#F5A623] transition-colors">
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-['Montserrat'] font-black text-[13px] sm:text-[14px] text-[#F5A623] mb-3 sm:mb-5 uppercase tracking-wide">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <MapPin size={16} className="text-[#F5A623] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-[13px] sm:text-[14px] leading-relaxed">
                  Main GT Rd, opposite University of,<br />Jamilabad, Wah, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Phone size={16} className="text-[#F5A623] flex-shrink-0" />
                <a href="tel:+923420564739" className="text-gray-300 text-[13px] sm:text-[14px] hover:text-[#F5A623] transition-colors">
                  +92 342 0564739
                </a>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Clock size={16} className="text-[#F5A623] flex-shrink-0" />
                <span className="text-gray-300 text-[13px] sm:text-[14px]">Open Daily · Closes 1 AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F5A623]/20 pt-5 sm:pt-6 text-center">
          <p className="text-gray-400 text-[12px] sm:text-[13px]">© 2026 Food Bite. All rights reserved. Made with ❤️ in Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}