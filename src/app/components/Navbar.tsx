import React from "react";
import { Link, useLocation } from "react-router";
import { ShoppingCart } from "lucide-react";
import logo from "../../assets/logo.png";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: "Home",    to: "/" },
    { label: "Menu",    to: "/menu" },
    { label: "About",   to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#F5A623] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px]">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={logo} alt="Food Bite" className="h-[50px] w-auto object-contain" />
          </Link>

          {/* Desktop nav links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`font-semibold text-[15px] uppercase tracking-wide transition-colors ${
                  isActive(link.to)
                    ? "text-[#3B1F0E] underline underline-offset-4 decoration-2"
                    : "text-[#3B1F0E] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Cart + Order Now */}
          <div className="flex items-center gap-3">
            {/* Cart icon — visible on all screen sizes */}
            <Link
              to="/cart"
              className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#3B1F0E] hover:bg-[#2a150a] transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart size={18} className="text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-[#3B1F0E] text-[9px] font-black w-[16px] h-[16px] rounded-full flex items-center justify-center border-2 border-[#F5A623]">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Link>

            {/* Order Now — desktop only */}
            <Link
              to="/menu"
              className="hidden md:block bg-[#3B1F0E] hover:bg-[#2a150a] transition-all text-white font-bold text-[14px] px-5 py-[9px] rounded-full uppercase tracking-wide"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}