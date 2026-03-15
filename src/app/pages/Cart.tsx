import React from "react";
import { Link } from "react-router";
import { Minus, Plus, Trash2, ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";

const WHATSAPP_NUMBER = "923420564739";
const DELIVERY_FEE = 150;

export function Cart() {
  const { items, totalItems, totalPrice, removeItem, clearCart, addItem, decreaseItem } = useCart();
  const grandTotal = totalPrice + (items.length > 0 ? DELIVERY_FEE : 0);

  const handleWhatsappCheckout = () => {
    if (items.length === 0) return;
    const lines = [
      "Assalam o Alaikum Food Bite 👋", "",
      "I want to place this order:", "",
      ...items.map((item) => `• ${item.name} x${item.quantity} — Rs. ${item.priceValue * item.quantity}`),
      "", `Subtotal: Rs. ${totalPrice}`, `Delivery Fee: Rs. ${DELIVERY_FEE}`, `Total: Rs. ${grandTotal}`, "",
      "Please confirm the order and share the delivery time.",
    ];
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-2">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-7 sm:h-8 bg-[#F5A623] rounded-full" />
          <h1 className="font-['Montserrat'] font-black text-[24px] sm:text-[32px] md:text-[36px] text-[#3B1F0E] uppercase tracking-wide">
            Your Cart
          </h1>
        </div>
        <Link to="/menu" className="inline-flex items-center gap-2 text-[#3B1F0E] font-semibold text-[13px] sm:text-[14px] hover:text-[#F5A623] transition-colors mt-1">
          <ArrowLeft size={15} /> Continue Shopping
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {items.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-sm p-10 sm:p-16 text-center">
            <ShoppingCart size={52} className="mx-auto text-gray-200 mb-5" />
            <h2 className="font-['Montserrat'] font-black text-[20px] sm:text-[24px] text-[#3B1F0E] mb-3">Your cart is empty</h2>
            <p className="text-gray-500 text-[14px] mb-6">Add some delicious items from our menu!</p>
            <Link to="/menu" className="inline-block bg-[#F5A623] text-[#3B1F0E] px-6 py-3 rounded-full font-bold text-[15px] hover:bg-[#e09515] transition-all">
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">

            {/* Cart Items */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden">
                {items.map((item, idx) => (
                  <div key={item.id} className={`flex items-center gap-3 sm:gap-5 p-3 sm:p-6 ${idx < items.length - 1 ? "border-b border-gray-100" : ""}`}>
                    <img src={item.image} alt={item.name} className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded-xl sm:rounded-2xl object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[14px] sm:text-[17px] text-[#3B1F0E] mb-0.5 truncate">{item.name}</h3>
                      {item.category && <p className="text-[11px] sm:text-[12px] text-gray-400 mb-1">{item.category}</p>}
                      <p className="text-[#F5A623] font-bold text-[13px] sm:text-[16px]">Rs. {item.priceValue}</p>
                    </div>
                    {/* Quantity */}
                    <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
                      <button onClick={() => decreaseItem(item.id)}
                        className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#F5A623] hover:text-[#F5A623] transition-colors active:scale-95">
                        <Minus size={12} />
                      </button>
                      <span className="font-bold text-[14px] sm:text-[16px] text-[#3B1F0E] w-[20px] text-center">{item.quantity}</span>
                      <button onClick={() => addItem({ id: item.id, name: item.name, priceDisplay: item.priceDisplay, priceValue: item.priceValue, image: item.image, category: item.category })}
                        className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-full bg-[#F5A623] flex items-center justify-center hover:bg-[#e09515] transition-colors active:scale-95">
                        <Plus size={12} className="text-[#3B1F0E]" />
                      </button>
                    </div>
                    <div className="text-right flex-shrink-0 ml-1 sm:ml-4">
                      <p className="font-bold text-[14px] sm:text-[17px] text-[#3B1F0E]">Rs. {item.priceValue * item.quantity}</p>
                      <button onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-600 transition-colors mt-1 text-[11px] font-medium flex items-center gap-0.5 ml-auto">
                        <Trash2 size={11} /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-3">
                <button onClick={clearCart} className="text-red-400 hover:text-red-600 transition-colors text-[13px] sm:text-[14px] font-semibold flex items-center gap-1.5">
                  <Trash2 size={14} /> Clear Entire Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-[380px] flex-shrink-0">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm p-5 sm:p-8 lg:sticky lg:top-24">
                <h2 className="font-['Montserrat'] font-black text-[18px] sm:text-[22px] text-[#3B1F0E] mb-4 sm:mb-6">Order Summary</h2>

                <div className="border-b border-[#F5A623] mb-4 pb-4 space-y-2 sm:space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-[12px] sm:text-[14px]">
                      <span className="text-gray-600 truncate mr-2">{item.name} x{item.quantity}</span>
                      <span className="font-semibold text-[#3B1F0E] flex-shrink-0">Rs. {item.priceValue * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                  <div className="flex justify-between text-[13px] sm:text-[15px]">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-semibold text-[#3B1F0E]">Rs. {totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-[13px] sm:text-[15px]">
                    <span className="text-gray-500">Delivery Fee</span>
                    <span className="font-semibold text-[#3B1F0E]">Rs. {DELIVERY_FEE}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-2 sm:pt-3 flex justify-between">
                    <span className="font-['Montserrat'] font-black text-[16px] sm:text-[18px] text-[#3B1F0E]">Total</span>
                    <span className="font-['Montserrat'] font-black text-[20px] sm:text-[22px] text-[#F5A623]">Rs. {grandTotal}</span>
                  </div>
                </div>

                <button onClick={handleWhatsappCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#1ebe5b] transition-all text-white font-bold text-[14px] sm:text-[16px] py-3.5 sm:py-4 rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 shadow-lg active:scale-95">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Checkout on WhatsApp
                </button>

                <p className="text-[10px] sm:text-[11px] text-gray-400 text-center mt-2 sm:mt-3">By proceeding, you agree to our Terms & Conditions.</p>

                <div className="mt-4 sm:mt-5 bg-[#FFF8F0] rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-start gap-2 sm:gap-3">
                  <span className="text-lg sm:text-xl">🛵</span>
                  <p className="text-[12px] sm:text-[13px] text-gray-600 leading-relaxed">
                    Fastest delivery available in <strong className="text-[#3B1F0E]">Wah Cantt</strong> area!
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}