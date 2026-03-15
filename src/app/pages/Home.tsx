import React from "react";
import { Link, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import dealimage from "../../assets/dealimage.png";
import shwarma from "../../assets/shwarma.webp";
import pizza from "../../assets/pizza.jpg";
import zinger from "../../assets/zinger.jpg";
import broast from "../../assets/broast.webp";
import bbq from "../../assets/bbq.webp";
import fajita from "../../assets/fajita.webp";

const imgHero =
  "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1200";

const popularItems = [
  { id: "popular-zinger-burger",    name: "Zinger Burger",    price: "Rs. 449", priceValue: 449, img: zinger,  category: "Burgers"  },
  { id: "popular-fajita-pizza",     name: "Fajita Pizza",     price: "Rs. 599", priceValue: 599, img: fajita,  category: "Pizza"    },
  { id: "popular-zinger-shawarma",  name: "Zinger Shawarma",  price: "Rs. 429", priceValue: 429, img: shwarma, category: "Shawarma" },
  { id: "popular-bbq-pizza",        name: "BBQ Pizza",        price: "Rs. 599", priceValue: 599, img: bbq,     category: "Pizza"    },
  { id: "popular-quarter-broast",   name: "Quarter Broast",   price: "Rs. 849", priceValue: 849, img: broast,  category: "Broast"   },
  { id: "popular-margherita-pizza", name: "Margherita Pizza", price: "Rs. 499", priceValue: 499, img: pizza,   category: "Pizza"    },
];

const categoryIcons = [
  { name: "Burgers",    emoji: "🍔", menuSection: "Burgers"    },
  { name: "Pizza",      emoji: "🍕", menuSection: "Pizza"      },
  { name: "Broast",     emoji: "🍗", menuSection: "Broast"     },
  { name: "Shawarma",   emoji: "🌯", menuSection: "Shawarma"   },
  { name: "Pasta",      emoji: "🍝", menuSection: "Pasta"      },
  { name: "Fries",      emoji: "🍟", menuSection: "Fries"      },
  { name: "Wraps",      emoji: "🌮", menuSection: "Wraps"      },
  { name: "Sandwiches", emoji: "🥪", menuSection: "Sandwiches" },
];

const DEAL_ITEM = {
  id: "deal-five-ka-fifteen",
  name: "Five Ka Fifteen Deal",
  priceDisplay: "Rs. 2,100",
  priceValue: 2100,
  image: zinger,
  category: "Deals",
};

export function Home() {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleClaimDeal = () => {
    addItem(DEAL_ITEM);
    navigate("/cart");
  };

  return (
    <div className="bg-[#FFF8F0] relative min-h-screen">

      {/* ── HERO ── */}
      <section className="relative h-[480px] sm:h-[560px] md:h-[600px] flex items-center overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0">
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgHero} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-[580px]">
            <div className="mb-4 sm:mb-6">
              <p className="font-['Be_Vietnam_Pro'] font-black text-[40px] sm:text-[56px] md:text-[72px] leading-[1] text-white">
                Taste the Crunch.
              </p>
              <p className="font-['Be_Vietnam_Pro'] font-black text-[40px] sm:text-[56px] md:text-[72px] leading-[1] text-[#f5a623]">
                Feel the Bite.
              </p>
            </div>
            <p className="font-['Be_Vietnam_Pro'] text-[14px] sm:text-[16px] md:text-[18px] text-[#cbd5e1] mb-6 max-w-[400px]">
              The finest hand-crafted burgers, crispy broast, and stone-fired pizzas in Wah Cantt.
            </p>
            <div className="flex gap-3">
              <Link to="/contact" className="bg-[#f5a623] px-5 sm:px-8 py-3 sm:py-4 rounded-[20px] shadow-lg hover:bg-[#e09515] transition-all active:scale-95">
                <span className="font-bold text-[14px] sm:text-[16px] text-[#3a1f0e]">Order Now</span>
              </Link>
              <Link to="/menu" className="border-2 border-white/50 px-5 sm:px-8 py-3 sm:py-4 rounded-[20px] hover:bg-white/10 transition-all backdrop-blur-sm">
                <span className="font-bold text-[14px] sm:text-[16px] text-white">View Menu</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERY BADGE ── */}
      <div className="relative -mt-6 mx-3 sm:mx-6 md:mx-8 mb-8 z-10">
        <div className="bg-white border border-[rgba(58,31,14,0.1)] rounded-2xl shadow-xl p-4 sm:p-6">
          {/* Mobile: stacked layout */}
          <div className="flex items-center gap-3 mb-4 sm:mb-0 sm:flex-row flex-row">
            <div className="bg-[#f5a623]/20 p-2.5 rounded-full text-xl flex-shrink-0">🛵</div>
            <div>
              <p className="font-bold text-[14px] sm:text-[16px] text-[#3a1f0e]">Free Delivery on First Order!</p>
              <p className="text-[12px] sm:text-[14px] text-[#64748b]">Limited time offer for new customers in Wah.</p>
            </div>
          </div>
          {/* Stats row — scrollable on tiny screens */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 sm:hidden">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#64748b]">Rating</p>
              <p className="font-bold text-[15px] text-[#3a1f0e]">⭐ 4.7</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#64748b]">Reviews</p>
              <p className="font-bold text-[15px] text-[#3a1f0e]">100+</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#64748b]">Min Order</p>
              <p className="font-bold text-[15px] text-[#3a1f0e]">Rs. 249</p>
            </div>
            <Link to="/contact" className="bg-[#3a1f0e] text-white font-semibold text-[12px] px-4 py-2 rounded-full">
              Claim
            </Link>
          </div>
          {/* Desktop stats row */}
          <div className="hidden sm:flex items-center divide-x divide-gray-200 mt-0">
            <div className="px-6 text-center">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#64748b] mb-1">Rating</p>
              <p className="font-bold text-[18px] text-[#3a1f0e]">⭐ 4.7/5</p>
            </div>
            <div className="px-6 text-center">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#64748b] mb-1">Reviews</p>
              <p className="font-bold text-[18px] text-[#3a1f0e]">100+</p>
            </div>
            <div className="px-6 text-center">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#64748b] mb-1">Min. Order</p>
              <p className="font-bold text-[18px] text-[#3a1f0e]">Rs. 249</p>
            </div>
            <div className="pl-6">
              <Link to="/contact" className="bg-[#3a1f0e] text-white font-semibold text-[14px] px-5 py-2 rounded-full hover:bg-[#2a150a] transition-colors whitespace-nowrap">
                Claim Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── WHY FOOD BITE ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="mb-6 sm:mb-10">
          <p className="font-['Be_Vietnam_Pro'] font-black text-[26px] sm:text-[36px] text-[#3a1f0e]">Why Food Bite?</p>
          <p className="font-['Be_Vietnam_Pro'] text-[14px] sm:text-[16px] text-[#64748b] mt-1">We ensure quality and speed in every single bite.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "🚀", title: "Fast Delivery", desc: "Delivered hot and fresh to your doorstep within 30 minutes." },
            { icon: "🥗", title: "Fresh Ingredients", desc: "Premium quality produce and 100% fresh meat every day." },
            { icon: "💰", title: "Best Prices", desc: "Unbeatable value for money with portions that keep you coming back." },
          ].map((card, i) => (
            <div key={i} className="bg-white border border-[rgba(58,31,14,0.05)] rounded-2xl p-5 sm:p-8 flex sm:block items-center gap-4 sm:gap-0">
              <div className="text-3xl sm:text-4xl sm:mb-5 flex-shrink-0">{card.icon}</div>
              <div>
                <p className="font-bold text-[16px] sm:text-[20px] text-[#0f172a] mb-1 sm:mb-3">{card.title}</p>
                <p className="text-[13px] sm:text-[16px] text-[#64748b] leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── POPULAR ITEMS ── */}
      <section className="bg-[rgba(58,31,14,0.05)] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-5 sm:mb-8">
            <p className="font-['Be_Vietnam_Pro'] font-black text-[20px] sm:text-[24px] text-[#3a1f0e]">Popular Items</p>
            <Link to="/menu" className="text-[#f5a623] font-semibold text-[13px] sm:text-[14px] hover:underline">View All →</Link>
          </div>
          <div className="overflow-x-auto pb-4 -mx-4 px-4 hide-scrollbar">
            <div className="flex gap-4 min-w-max">
              {popularItems.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-[rgba(58,31,14,0.05)] w-[200px] sm:w-[240px] flex-shrink-0 hover:shadow-xl transition-all">
                  <div className="h-[140px] sm:h-[160px] w-full overflow-hidden rounded-t-2xl">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="font-bold text-[14px] sm:text-[16px] text-[#0f172a] mb-1 leading-tight">{item.name}</p>
                    <p className="font-black text-[15px] sm:text-[17px] text-[#f5a623] mb-2">{item.price}</p>
                    <button
                      onClick={() => addItem({ id: item.id, name: item.name, priceDisplay: item.price, priceValue: item.priceValue, image: item.img, category: item.category })}
                      className="bg-[#3a1f0e] w-full px-3 py-2 rounded-xl hover:bg-[#2a150a] transition-colors font-bold text-[12px] sm:text-[13px] text-white text-center active:scale-95"
                    >
                      + Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BROWSE BY CATEGORY ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <p className="font-['Be_Vietnam_Pro'] font-black text-[20px] sm:text-[24px] text-[#3a1f0e] text-center mb-6 sm:mb-10">
          Browse by Category
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-2 sm:gap-4">
          {categoryIcons.map((cat, idx) => (
            <Link
              key={idx}
              to={`/menu?section=${encodeURIComponent(cat.menuSection)}`}
              className="bg-white border border-[rgba(58,31,14,0.05)] rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-center h-[80px] sm:h-[110px] hover:shadow-lg hover:border-[#f5a623] transition-all group active:scale-95"
            >
              <span className="text-2xl sm:text-3xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform">{cat.emoji}</span>
              <p className="font-bold text-[10px] sm:text-[13px] text-[#0f172a] text-center leading-tight">{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── DEAL SECTION ── */}
      <section className="mx-3 sm:mx-4 md:mx-6 mb-10 sm:mb-20">
        <div className="bg-[#3a1f0e] rounded-2xl sm:rounded-[24px] overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 sm:p-10 md:p-14">
            <div className="flex-1 w-full">
              <div className="bg-[rgba(245,166,35,0.2)] inline-block px-3 py-1 rounded-full mb-3">
                <p className="font-bold text-[10px] sm:text-[11px] uppercase tracking-widest text-[#f5a623]">🔥 Limited Offer</p>
              </div>
              <p className="font-['Be_Vietnam_Pro'] font-black text-[28px] sm:text-[38px] md:text-[52px] leading-[1.1] text-white mb-2 sm:mb-3">
                Five Ka Fifteen Deal
              </p>
              <p className="font-['Be_Vietnam_Pro'] text-[13px] sm:text-[16px] text-[#cbd5e1] mb-5 sm:mb-7 max-w-[380px]">
                Get 5 mouth-watering Zinger Burgers for an incredible price.
              </p>
              <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                <div>
                  <p className="font-medium text-[11px] sm:text-[13px] text-[#f5a623] uppercase tracking-wide">Only</p>
                  <p className="font-['Be_Vietnam_Pro'] font-black text-[30px] sm:text-[40px] text-[#f5a623] leading-none">Rs. 2,100</p>
                </div>
                <button
                  onClick={handleClaimDeal}
                  className="bg-[#f5a623] text-[#3a1f0e] font-black text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-[24px] hover:bg-[#e09515] transition-all hover:scale-105 shadow-lg active:scale-95"
                >
                  Claim Deal Now
                </button>
              </div>
            </div>
            {/* Deal image — smaller on mobile */}
            <div className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] rounded-2xl overflow-hidden rotate-3 shadow-2xl flex-shrink-0">
              <img src={dealimage} alt="Deal" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}