import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BottomNav } from "./Bottomnav"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/*
        BottomNav renders:
        1. The fixed golden bar (position: fixed, bottom: 0)
        2. A safe-area spacer inside the bar for notch phones
        3. A 80px spacer div BELOW Footer so content isn't hidden behind the bar
      */}
      <BottomNav />
    </div>
  );
}