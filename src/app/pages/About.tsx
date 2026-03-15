import React from "react";
import { Award, Clock, Heart, MapPin, Phone } from "lucide-react";

const restaurantImg = "https://images.unsplash.com/photo-1739792598744-3512897156e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc3MzU2ODY1MHww&ixlib=rb-4.1.0&q=80&w=1080";
const ingredientsImg = "https://images.unsplash.com/photo-1665088127661-83aeff6104c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZvb2QlMjBpbmdyZWRpZW50c3xlbnwxfHx8fDE3NzM1MTM4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[240px] sm:h-[320px] md:h-96 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `linear-gradient(rgba(59,31,14,0.75),rgba(59,31,14,0.75)),url(${restaurantImg})` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-[28px] sm:text-[42px] md:text-[56px] font-['Montserrat'] font-black text-white mb-2 sm:mb-4">
            About Food Bite
          </h1>
          <p className="text-[14px] sm:text-[18px] text-white/80">Bringing premium Pakistani fast food to Wah since day one</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-['Montserrat'] font-black text-[#3B1F0E] mb-4 sm:mb-6">Our Story</h2>
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-[14px] sm:text-[15px]">
                Food Bite started with a simple mission: to bring premium quality fast food to the people of Wah, Pakistan.
                We believe that great food doesn't have to compromise on quality or taste.
              </p>
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-[14px] sm:text-[15px]">
                From our signature Zinger Burgers to our mouth-watering Broast, every dish is crafted with care,
                using fresh ingredients and traditional Pakistani flavors blended with modern fast food expertise.
              </p>
              <p className="text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                Located on Main GT Road in Jamilabad, we've become a favorite destination for food lovers who
                appreciate quality, taste, and value.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-[220px] sm:h-[320px] lg:h-auto">
              <img src={ingredientsImg} alt="Fresh ingredients" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-10 sm:py-16 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-['Montserrat'] font-black text-[#3B1F0E] text-center mb-8 sm:mb-12">
            Our Promise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            {[
              { icon: Award, title: "Quality", desc: "We use only the finest ingredients and maintain the highest standards in food preparation. Every dish is made fresh to order." },
              { icon: Clock, title: "Speed",   desc: "Quick service without compromising quality. We understand your time is valuable, so we deliver fast and fresh." },
              { icon: Heart, title: "Taste",   desc: "Bold Pakistani flavors with a modern twist. Each recipe is perfected to deliver an unforgettable taste experience." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-5 sm:p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-[#F5A623] w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-[18px] sm:text-[22px] font-semibold text-[#3B1F0E] mb-2 sm:mb-3">{title}</h3>
                <p className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-['Montserrat'] font-black text-[#3B1F0E] text-center mb-8 sm:mb-12">
            Visit Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[220px] sm:h-[320px] lg:h-96">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3B1F0E] to-[#5a2f15] text-white">
                <div className="text-center p-6 sm:p-8">
                  <MapPin className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-[#F5A623]" />
                  <p className="text-[13px] sm:text-[16px] mb-4">Main GT Rd, opposite University of,<br />Jamilabad, Wah, Pakistan</p>
                  <a href="https://maps.google.com/?q=Main+GT+Rd+Jamilabad+Wah+Pakistan" target="_blank" rel="noopener noreferrer"
                    className="inline-block bg-[#F5A623] text-[#3B1F0E] px-5 py-2.5 rounded-full font-semibold text-[14px] hover:bg-[#e09515] transition-colors">
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF8F0] p-5 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-[18px] sm:text-[22px] font-semibold text-[#3B1F0E] mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: MapPin, label: "Address",       content: "Main GT Rd, opposite University of, Jamilabad, Wah, Pakistan" },
                  { icon: Phone,  label: "Phone",         content: "+92 342 0564739", href: "tel:+923420564739" },
                  { icon: Clock,  label: "Opening Hours", content: "Open Daily · Closes 1 AM" },
                ].map(({ icon: Icon, label, content, href }) => (
                  <div key={label} className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-[#F5A623] p-2.5 sm:p-3 rounded-full flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#3B1F0E] text-[14px] mb-0.5">{label}</h4>
                      {href
                        ? <a href={href} className="text-gray-600 hover:text-[#F5A623] text-[13px] sm:text-[14px]">{content}</a>
                        : <p className="text-gray-600 text-[13px] sm:text-[14px]">{content}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-16 bg-gradient-to-r from-[#3B1F0E] to-[#5a2f15] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[22px] sm:text-[32px] md:text-[40px] font-['Montserrat'] font-black mb-3 sm:mb-4">
            Ready to Experience Food Bite?
          </h2>
          <p className="text-[14px] sm:text-[18px] mb-6 sm:mb-8 text-white/80">Order now and taste the difference!</p>
          <a href="/contact" className="inline-block bg-[#F5A623] text-[#3B1F0E] px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-[15px] sm:text-[17px] hover:bg-[#e09515] transition-all">
            Order Now
          </a>
        </div>
      </section>
    </div>
  );
}