import React from "react";
import { Link, useLocation } from "react-router";
import { Home, UtensilsCrossed, Phone, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export function BottomNav() {
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path: string) => location.pathname === path;

  const tabs = [
    { label: "Home",    to: "/",        icon: Home            },
    { label: "Menu",    to: "/menu",    icon: UtensilsCrossed },
    { label: "Cart",    to: "/cart",    icon: ShoppingCart    },
    { label: "Contact", to: "/contact", icon: Phone           },
  ];

  return (
    <nav
      className="md:hidden"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: "#F5A623",
        borderTop: "2px solid #e09515",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", height: "62px", padding: "0 8px" }}>
        {tabs.map(({ label, to, icon: Icon }) => {
          const active = isActive(to);
          const isCart = to === "/cart";
          return (
            <Link
              key={to}
              to={to}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "2px",
                height: "100%",
                textDecoration: "none",
                color: active ? "#ffffff" : "#3B1F0E",
                opacity: active ? 1 : 0.75,
                position: "relative",
              }}
            >
              {/* Active top indicator */}
              {active && (
                <span style={{
                  position: "absolute",
                  top: "4px",
                  width: "28px",
                  height: "3px",
                  backgroundColor: "#ffffff",
                  borderRadius: "99px",
                }} />
              )}

              {/* Icon with cart badge */}
              <span style={{ position: "relative", marginTop: active ? "6px" : "0" }}>
                <Icon size={22} strokeWidth={active ? 2.5 : 2} />
                {isCart && totalItems > 0 && (
                  <span style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    backgroundColor: "#3B1F0E",
                    color: "#ffffff",
                    fontSize: "9px",
                    fontWeight: "900",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </span>

              <span style={{
                fontSize: "10px",
                fontWeight: "700",
                lineHeight: 1,
                color: active ? "#ffffff" : "#3B1F0E",
              }}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}