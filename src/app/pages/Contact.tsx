import React, { useState } from "react";
import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", items: "", requests: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Order Inquiry*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nItems: ${formData.items}\nSpecial Requests: ${formData.requests}`;
    window.open(`https://wa.me/923420564739?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleWhatsAppDirect = () => {
    window.open(`https://wa.me/923420564739?text=${encodeURIComponent("Hi! I'd like to place an order.")}`, "_blank");
  };

  return (
    <div className="bg-[#FFF8F0]">
      {/* Hero */}
      <div className="bg-[#3B1F0E] text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[28px] sm:text-[40px] md:text-[52px] font-['Montserrat'] font-black">Order Now</h1>
          <p className="text-gray-300 mt-2 sm:mt-4 text-[14px] sm:text-[17px]">Place your order and we'll get it to you fresh and fast!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">

          {/* Order Form */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-[20px] sm:text-[24px] font-['Montserrat'] font-black text-[#3B1F0E] mb-5 sm:mb-6">Place Your Order</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-[#3B1F0E] text-[14px] sm:text-[15px] mb-1.5 font-medium">Your Name *</label>
                <input type="text" required value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 sm:py-3 text-[14px] border-2 border-gray-200 rounded-xl focus:border-[#F5A623] focus:outline-none"
                  placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-[#3B1F0E] text-[14px] sm:text-[15px] mb-1.5 font-medium">Phone Number *</label>
                <input type="tel" required value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 sm:py-3 text-[14px] border-2 border-gray-200 rounded-xl focus:border-[#F5A623] focus:outline-none"
                  placeholder="+92 XXX XXXXXXX" />
              </div>
              <div>
                <label className="block text-[#3B1F0E] text-[14px] sm:text-[15px] mb-1.5 font-medium">Items to Order *</label>
                <textarea required value={formData.items}
                  onChange={(e) => setFormData({ ...formData, items: e.target.value })}
                  rows={3} className="w-full px-4 py-2.5 sm:py-3 text-[14px] border-2 border-gray-200 rounded-xl focus:border-[#F5A623] focus:outline-none resize-none"
                  placeholder="e.g., 2x Zinger Burger, 1x Large Fries" />
              </div>
              <div>
                <label className="block text-[#3B1F0E] text-[14px] sm:text-[15px] mb-1.5 font-medium">Special Requests (Optional)</label>
                <textarea value={formData.requests}
                  onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                  rows={2} className="w-full px-4 py-2.5 sm:py-3 text-[14px] border-2 border-gray-200 rounded-xl focus:border-[#F5A623] focus:outline-none resize-none"
                  placeholder="Any special instructions?" />
              </div>
              <button type="submit"
                className="w-full bg-green-500 text-[#3B1F0E] py-3.5 sm:py-4 rounded-full font-bold text-[15px] sm:text-[17px] hover:bg-[#e09515] transition-all active:scale-95">
                Send Order via WhatsApp
              </button>
            </form>

            <div className="mt-5 sm:mt-6">
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
                {/* <div className="relative flex justify-center text-sm"><span className="px-4 bg-white text-gray-400">Or</span></div> */}
              </div>
              {/* <button onClick={handleWhatsAppDirect}
                className="w-full bg-green-500 text-white py-3.5 sm:py-4 rounded-full font-bold text-[15px] sm:text-[17px] hover:bg-green-600 transition-all flex items-center justify-center gap-2 active:scale-95">
                <MessageCircle size={20} /> Order via WhatsApp
              </button> */}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-lg">
              <h2 className="text-[18px] sm:text-[22px] font-['Montserrat'] font-black text-[#3B1F0E] mb-4 sm:mb-6">Contact Information</h2>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: Phone, label: "Call Us", content: <a href="tel:+923420564739" className="text-gray-600 hover:text-[#F5A623] text-[14px] sm:text-[16px]">+92 342 0564739</a> },
                  { icon: MapPin, label: "Location", content: <p className="text-gray-600 text-[13px] sm:text-[14px]">Main GT Rd, opposite University of,<br />Jamilabad, Wah, Pakistan</p> },
                  { icon: MessageCircle, label: "WhatsApp", content: <a href="https://wa.me/923420564739" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#F5A623] text-[14px] sm:text-[16px]">Chat with us</a> },
                ].map(({ icon: Icon, label, content }) => (
                  <div key={label} className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-[#F5A623] p-2.5 sm:p-3 rounded-full flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#3B1F0E] text-[14px] sm:text-[15px] mb-0.5">{label}</h3>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3B1F0E] to-[#5a2f15] p-5 sm:p-8 rounded-2xl shadow-lg text-white">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#F5A623]" />
                <h2 className="text-[18px] sm:text-[22px] font-['Montserrat'] font-black">Opening Hours</h2>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-[14px] sm:text-[15px]">Monday - Sunday</span>
                <span className="text-[#F5A623] text-[14px]">Open Daily</span>
              </div>
              <div className="border-t border-white/20 pt-3">
                <p className="text-[15px] sm:text-[17px]">Closes at 1:00 AM</p>
                <p className="text-gray-300 text-[12px] sm:text-[13px] mt-1">We're open late for your convenience!</p>
              </div>
            </div>

            <div className="bg-[#F5A623] p-5 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-[18px] sm:text-[22px] font-['Montserrat'] font-black text-[#3B1F0E] mb-3">🎉 Free Delivery</h3>
              <p className="text-[#3B1F0E] text-[13px] sm:text-[14px] mb-3">Get free delivery on your first order! Minimum order Rs. 249.</p>
              <ul className="space-y-1.5 text-[#3B1F0E] text-[13px] sm:text-[14px]">
                <li>✓ Fast delivery within 30-45 minutes</li>
                <li>✓ Fresh and hot food guaranteed</li>
                <li>✓ Track your order via WhatsApp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[20px] sm:text-[28px] font-['Montserrat'] font-black text-[#3B1F0E] mb-3">Prefer to Pick Up?</h2>
          <p className="text-gray-600 text-[13px] sm:text-[15px] mb-5">Visit us at our location in Jamilabad, Wah!</p>
          <a href="https://maps.google.com/?q=Main+GT+Rd+Jamilabad+Wah+Pakistan" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-[#3B1F0E] text-white px-7 py-3.5 rounded-full font-semibold text-[14px] sm:text-[16px] hover:bg-[#2a150a] transition-all">
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}