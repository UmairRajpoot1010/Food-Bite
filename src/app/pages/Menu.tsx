import React, { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useSearchParams } from "react-router";

const burgerImg = "https://images.unsplash.com/photo-1760533536738-f0965fd52354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlzcHklMjBmcmllZCUyMGNoaWNrZW4lMjBidXJnZXJ8ZW58MXx8fHwxNzczNTcxODA3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const pizzaImg = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYnElMjBjaGlja2VuJTIwcGl6emF8ZW58MXx8fHwxNzczNTE2OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const shawarmaImg = "https://images.unsplash.com/photo-1734468330969-93c69106993f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGF3YXJtYSUyMHdyYXAlMjBzYW5kd2ljaHxlbnwxfHx8fDE3NzM0OTI4NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const broastImg = "https://images.unsplash.com/photo-1708184528306-f75a0a5118ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbmklMjBicm9hc3QlMjBjaGlja2VufGVufDF8fHx8MTc3MzU3MTgwN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const friesImg = "https://images.unsplash.com/photo-1717294978892-cef673e1d17b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBmcmVuY2glMjBmcmllc3xlbnwxfHx8fDE3NzM1NzE4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const pastaImg = "https://images.unsplash.com/photo-1638890763825-e20495f6b819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwcGFzdGElMjBkaXNofGVufDF8fHx8MTc3MzU3MTgwOHww&ixlib=rb-4.1.0&q=80&w=1080";
const sandwichImg = "https://images.unsplash.com/photo-1763647814142-b1eb054d42f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbHViJTIwc2FuZHdpY2glMjBnb3VybWV0fGVufDF8fHx8MTc3MzQ1ODczNXww&ixlib=rb-4.1.0&q=80&w=1080";
const nuggetsImg = "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwbnVnZ2V0cyUyMGNyaXNweXxlbnwxfHx8fDE3NzM1NzE4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080";

interface PizzaSize { label: "Small" | "Medium" | "Large"; price: number; }
interface MenuItem {
  id: string; name: string; priceDisplay: string; priceValue: number;
  description?: string; image: string; badge?: string; isPizza?: boolean; sizes?: PizzaSize[];
}

function PizzaCard({ item, category }: { item: MenuItem; category: string }) {
  const { addItem } = useCart();
  const sizes: PizzaSize[] = item.sizes || [
    { label: "Small", price: item.priceValue - 100 },
    { label: "Medium", price: item.priceValue },
    { label: "Large", price: item.priceValue + 200 },
  ];
  const [selectedSize, setSelectedSize] = useState<PizzaSize>(sizes[1]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        {item.badge && <span className="absolute top-2 left-2 bg-[#3B1F0E] text-[#F5A623] text-[10px] font-bold px-2 py-0.5 rounded-full">{item.badge}</span>}
        <span className="absolute top-2 right-2 bg-[#F5A623] text-[#3B1F0E] text-[10px] font-bold px-2 py-0.5 rounded-full">🍕 Pizza</span>
      </div>
      <div className="p-3 sm:p-5">
        <h3 className="font-bold text-[15px] sm:text-[17px] text-[#3B1F0E] mb-1">{item.name}</h3>
        {item.description && (
          <p className="text-gray-500 text-[12px] sm:text-[13px] mb-3 leading-relaxed line-clamp-2">{item.description}</p>
        )}
        <div className="flex gap-1.5 sm:gap-2 mb-3">
          {sizes.map((size) => (
            <button key={size.label} onClick={() => setSelectedSize(size)}
              className={`flex-1 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-[12px] font-bold border-2 transition-all ${
                selectedSize.label === size.label ? "bg-[#F5A623] border-[#F5A623] text-[#3B1F0E]" : "bg-white border-gray-200 text-gray-500"
              }`}>
              {size.label}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-black text-[17px] sm:text-[20px] text-[#F5A623]">Rs. {selectedSize.price}</span>
            <span className="text-[10px] text-gray-400 ml-1">/ {selectedSize.label}</span>
          </div>
          <button
            onClick={() => addItem({ id: `${item.id}-${selectedSize.label.toLowerCase()}`, name: `${item.name} (${selectedSize.label})`, priceDisplay: `Rs. ${selectedSize.price}`, priceValue: selectedSize.price, image: item.image, category })}
            className="bg-[#F5A623] text-[#3B1F0E] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-[12px] sm:text-[13px] hover:bg-[#e09515] transition-all flex items-center gap-1 active:scale-95"
          >
            <Plus size={13} /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

function ItemCard({ item, category }: { item: MenuItem; category: string }) {
  const { addItem } = useCart();
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        {item.badge && <span className="absolute top-2 left-2 bg-[#3B1F0E] text-[#F5A623] text-[10px] font-bold px-2 py-0.5 rounded-full">{item.badge}</span>}
      </div>
      <div className="p-3 sm:p-5">
        <h3 className="font-bold text-[15px] sm:text-[17px] text-[#3B1F0E] mb-1">{item.name}</h3>
        {item.description && (
          <p className="text-gray-500 text-[12px] sm:text-[13px] mb-3 leading-relaxed line-clamp-2">{item.description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="font-black text-[16px] sm:text-[18px] text-[#F5A623]">{item.priceDisplay}</span>
          <button
            onClick={() => addItem({ id: item.id, name: item.name, priceDisplay: item.priceDisplay, priceValue: item.priceValue, image: item.image, category })}
            className="bg-[#F5A623] text-[#3B1F0E] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-[12px] sm:text-[13px] hover:bg-[#e09515] transition-all flex items-center gap-1 active:scale-95"
          >
            <Plus size={13} /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

const menuData: Record<string, MenuItem[]> = {
  Popular: [
    { id: "popular-zinger-burger",    name: "Zinger Burger",    priceDisplay: "Rs. 449",      priceValue: 449,  description: "Crispy fried chicken with special sauce",   image: burgerImg,   badge: "🔥 Popular" },
    { id: "popular-fajita-pizza",     name: "Fajita Pizza",     priceDisplay: "from Rs. 599", priceValue: 599,  description: "Loaded with fajita chicken and vegetables", image: pizzaImg,    badge: "🔥 Popular", isPizza: true, sizes: [{ label: "Small", price: 499 }, { label: "Medium", price: 599 }, { label: "Large", price: 849 }] },
    { id: "popular-zinger-shawarma",  name: "Zinger Shawarma",  priceDisplay: "Rs. 429",      priceValue: 429,  description: "Spicy zinger wrapped in soft bread",        image: shawarmaImg, badge: "🔥 Popular" },
    { id: "popular-bbq-pizza",        name: "BBQ Pizza",        priceDisplay: "from Rs. 599", priceValue: 599,  description: "BBQ sauce with tender chicken",             image: pizzaImg,    badge: "🔥 Popular", isPizza: true, sizes: [{ label: "Small", price: 499 }, { label: "Medium", price: 599 }, { label: "Large", price: 849 }] },
    { id: "popular-quarter-broast",   name: "Quarter Broast",   priceDisplay: "Rs. 849",      priceValue: 849,  description: "Perfectly seasoned crispy broast",          image: broastImg,   badge: "🔥 Popular" },
    { id: "popular-margherita-pizza", name: "Margherita Pizza", priceDisplay: "from Rs. 499", priceValue: 499,  description: "Classic cheese pizza",                      image: pizzaImg,    badge: "🔥 Popular", isPizza: true, sizes: [{ label: "Small", price: 399 }, { label: "Medium", price: 499 }, { label: "Large", price: 749 }] },
  ],
  Deals: [
    { id: "deal-five-ka-fifteen", name: "Five Ka Fifteen Deal", priceDisplay: "Rs. 2,100", priceValue: 2100, description: "5 Zinger Burgers — Best value in Wah!", image: burgerImg, badge: "💥 Deal" },
  ],
  Sandwiches: [
    { id: "sandwich-grill-shark",   name: "Grill & Shark",  priceDisplay: "Rs. 550", priceValue: 550, description: "Grilled chicken with special sauce",               image: sandwichImg },
    { id: "sandwich-club",          name: "Club Sandwich",  priceDisplay: "Rs. 600", priceValue: 600, description: "Triple-decker with chicken, egg, and vegetables", image: sandwichImg },
    { id: "sandwich-tikka-panani",  name: "Tikka Panani",   priceDisplay: "Rs. 500", priceValue: 500, description: "Spicy tikka in panini bread",                     image: sandwichImg },
  ],
  "Paratha Roll": [
    { id: "paratha-zingratha",        name: "Zingratha",          priceDisplay: "Rs. 449", priceValue: 449, description: "Zinger wrapped in fresh paratha",   image: shawarmaImg },
    { id: "paratha-seekh-kabab-roll", name: "Seekh Kabab Roll",   priceDisplay: "Rs. 439", priceValue: 439, description: "Juicy seekh kabab in paratha",       image: shawarmaImg },
    { id: "paratha-tikka-roll",       name: "Tikka Roll Paratha", priceDisplay: "Rs. 400", priceValue: 400, description: "Chicken tikka paratha roll",         image: shawarmaImg },
  ],
  Pizza: [
    { id: "pizza-margherita",    name: "Margherita",                  priceDisplay: "from Rs. 399",   priceValue: 399,  description: "Classic cheese and tomato",        image: pizzaImg, isPizza: true, sizes: [{ label: "Small", price: 399 },  { label: "Medium", price: 499 },  { label: "Large", price: 749  }] },
    { id: "pizza-bbq",           name: "BBQ",                         priceDisplay: "from Rs. 499",   priceValue: 499,  description: "BBQ chicken with onions",          image: pizzaImg, isPizza: true, sizes: [{ label: "Small", price: 499 },  { label: "Medium", price: 599 },  { label: "Large", price: 849  }] },
    { id: "pizza-tikka",         name: "Tikka",                       priceDisplay: "from Rs. 499",   priceValue: 499,  description: "Spicy tikka chicken",              image: pizzaImg, isPizza: true, sizes: [{ label: "Small", price: 499 },  { label: "Medium", price: 599 },  { label: "Large", price: 849  }] },
    { id: "pizza-fajita",        name: "Fajita",                      priceDisplay: "from Rs. 499",   priceValue: 499,  description: "Fajita chicken with peppers",      image: pizzaImg, isPizza: true, sizes: [{ label: "Small", price: 499 },  { label: "Medium", price: 599 },  { label: "Large", price: 849  }] },
    { id: "pizza-special-crown", name: "Special Crown Crust",         priceDisplay: "from Rs. 1,350", priceValue: 1350, description: "Premium crown crust pizza",        image: pizzaImg, isPizza: true, badge: "⭐ Special", sizes: [{ label: "Small", price: 1350 }, { label: "Medium", price: 1550 }, { label: "Large", price: 1850 }] },
    { id: "pizza-bihari-kabab",  name: "Special Bihari Kabab",        priceDisplay: "from Rs. 1,350", priceValue: 1350, description: "Bihari kabab special pizza",       image: pizzaImg, isPizza: true, badge: "⭐ Special", sizes: [{ label: "Small", price: 1350 }, { label: "Medium", price: 1550 }, { label: "Large", price: 1850 }] },
    { id: "pizza-kabab-crust",   name: "Special Kabab Crust Stuffed", priceDisplay: "from Rs. 1,350", priceValue: 1350, description: "Stuffed crust with kabab filling", image: pizzaImg, isPizza: true, badge: "⭐ Special", sizes: [{ label: "Small", price: 1350 }, { label: "Medium", price: 1550 }, { label: "Large", price: 1850 }] },
  ],
  Burgers: [
    { id: "burger-chicken-patty", name: "Chicken Patty", priceDisplay: "Rs. 349", priceValue: 349, description: "Classic chicken patty burger",  image: burgerImg },
    { id: "burger-zinger",        name: "Zinger",        priceDisplay: "Rs. 449", priceValue: 449, description: "Crispy fried zinger chicken",    image: burgerImg },
    { id: "burger-afghani",       name: "Afghani",       priceDisplay: "Rs. 349", priceValue: 349, description: "Afghani-style grilled burger",   image: burgerImg },
    { id: "burger-mac-chicken",   name: "Mac Chicken",   priceDisplay: "Rs. 379", priceValue: 379, description: "Double chicken patty delight",  image: burgerImg },
  ],
  Broast: [
    { id: "broast-quarter", name: "Quarter Broast", priceDisplay: "Rs. 849",   priceValue: 849,  description: "2 pcs: leg & thigh or breast & wings, bun, fries & garlic dip", image: broastImg },
    { id: "broast-half",    name: "Half Broast",    priceDisplay: "Rs. 1,499", priceValue: 1499, description: "Half chicken with bun, fries & garlic dip",                      image: broastImg },
    { id: "broast-full",    name: "Full Broast",    priceDisplay: "Rs. 2,349", priceValue: 2349, description: "8 pieces with 2 buns, fries & garlic dips",                     image: broastImg },
    { id: "broast-family",  name: "Family Broast",  priceDisplay: "Rs. 4,649", priceValue: 4649, description: "16 pieces — feeds the whole family", image: broastImg, badge: "👨‍👩‍👧‍👦 Family" },
  ],
  Shawarma: [
    { id: "shawarma-zinger", name: "Zinger Shawarma", priceDisplay: "Rs. 429", priceValue: 429, description: "Spicy zinger shawarma",   image: shawarmaImg },
    { id: "shawarma-tikka",  name: "Tikka Shawarma",  priceDisplay: "Rs. 400", priceValue: 400, description: "Chicken tikka shawarma",  image: shawarmaImg },
  ],
  Pasta: [
    { id: "pasta-baked",    name: "Baked Pasta",    priceDisplay: "Rs. 600", priceValue: 600, description: "Oven-baked pasta perfection", image: pastaImg },
    { id: "pasta-crunchy",  name: "Crunchy Pasta",  priceDisplay: "Rs. 700", priceValue: 700, description: "Pasta with crispy topping",   image: pastaImg },
    { id: "pasta-macaroni", name: "Macaroni Pasta", priceDisplay: "Rs. 449", priceValue: 449, description: "Classic mac and cheese",      image: pastaImg },
    { id: "pasta-alfredo",  name: "Alfredo Pasta",  priceDisplay: "Rs. 800", priceValue: 800, description: "Creamy alfredo pasta",        image: pastaImg },
  ],
  Wraps: [
    { id: "wrap-crunchy",  name: "Crunchy Wrap",  priceDisplay: "Rs. 449", priceValue: 449, description: "Crispy layered wrap",         image: shawarmaImg },
    { id: "wrap-chipotle", name: "Chipotle Wrap", priceDisplay: "Rs. 449", priceValue: 449, description: "Spicy chipotle chicken wrap", image: shawarmaImg },
  ],
  "Crispy Fried Chicken": [
    { id: "crispy-chicken-piece", name: "Crispy Fried Chicken", priceDisplay: "Rs. 279 / piece", priceValue: 279, description: "Single piece of golden crispy fried chicken", image: broastImg },
  ],
  Nuggets: [
    { id: "nuggets-chicken", name: "Chicken Nuggets", priceDisplay: "Rs. 439", priceValue: 439, description: "Golden crispy chicken bites in spicy seasoning", image: nuggetsImg },
  ],
  Fries: [
    { id: "fries-plain",       name: "Plain Fries",       priceDisplay: "from Rs. 199", priceValue: 199, description: "Classic golden crispy fries",          image: friesImg },
    { id: "fries-masala",      name: "Masala Fries",      priceDisplay: "Rs. 350",      priceValue: 350, description: "Crisp fries in spicy masala blend",    image: friesImg },
    { id: "fries-garlic-mayo", name: "Garlic Mayo Fries", priceDisplay: "Rs. 380",      priceValue: 380, description: "Crispy fries in aromatic garlic mayo", image: friesImg },
    { id: "fries-pizza",       name: "Pizza Fries",       priceDisplay: "Rs. 550",      priceValue: 550, description: "Fries smothered in rich pizza flavor", image: friesImg },
  ],
};

const categories = Object.keys(menuData);

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("Popular");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const target = searchParams.get("section");
    if (!target) return;
    const timer = setTimeout(() => {
      const el = sectionRefs.current[target];
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 130;
        window.scrollTo({ top: y, behavior: "smooth" });
        setActiveCategory(target);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      for (const section of categories) {
        const element = sectionRefs.current[section];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) { setActiveCategory(section); break; }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (category: string) => {
    const element = sectionRefs.current[category];
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 130;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActiveCategory(category);
  };

  return (
    <div className="bg-[#FFF8F0]">
      {/* Hero */}
      <div className="bg-[#3B1F0E] text-white py-8 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Montserrat'] font-black text-[30px] sm:text-[42px] md:text-[52px]">Our Full Menu</h1>
          <p className="text-gray-300 mt-2 sm:mt-3 text-[14px] sm:text-[17px]">Explore our delicious range of Pakistani fast food</p>
        </div>
      </div>

      {/* Sticky Category Tabs */}
      <div className="sticky top-[64px] z-40 bg-white shadow-md border-b border-gray-100">
        <div ref={scrollContainerRef} className="overflow-x-auto hide-scrollbar">
          <div className="flex gap-2 px-3 sm:px-4 py-2.5 sm:py-3 max-w-7xl mx-auto" style={{ minWidth: "max-content" }}>
            {categories.map((category) => (
              <button key={category} onClick={() => scrollToCategory(category)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold text-[12px] sm:text-[13px] whitespace-nowrap transition-all ${
                  activeCategory === category ? "bg-[#F5A623] text-[#3B1F0E] shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-12">
        {categories.map((category) => (
          <section key={category} ref={(el) => { sectionRefs.current[category] = el; }} className="mb-10 sm:mb-16">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-7">
              <div className="w-1 h-7 sm:h-8 bg-[#F5A623] rounded-full" />
              <h2 className="font-['Montserrat'] font-black text-[22px] sm:text-[28px] text-[#3B1F0E]">{category}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {menuData[category].map((item) =>
                item.isPizza ? (
                  <PizzaCard key={item.id} item={item} category={category} />
                ) : (
                  <ItemCard key={item.id} item={item} category={category} />
                )
              )}
            </div>
          </section>
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
}