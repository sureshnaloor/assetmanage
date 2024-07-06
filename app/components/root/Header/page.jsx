import React from "react";

import {
  Construction,
  House,
  PersonStanding,
  TabletSmartphone,
  Tractor,
  Truck,
  Wrench,
} from "lucide-react";

import Profilesection from "../profilesection";
import WhatsnewSection from "../whatsnewSection";
import Headermenu from "../headermenu";
import { ModeToggle } from "../themeswitch";

function Rootheader() {
  const headermenu = [
    { name: "Home", path: "/", icon: House },
    { name: "Materials", path: "/materials", icon: Wrench },
    { name: "Vendors", path: "/vendors", icon: PersonStanding },
    { name: "Purchases", path: "/purchases", icon: Truck },
    { name: "Projects", path: "/projects", icon: Construction },
    { name: "Assets", path: "/assets", icon: Tractor },
    { name: "Telecom", path: "/telecom", icon: TabletSmartphone },
  ];

  return (
    <div className="w-full bg-slate-100 dark:bg-zinc-600 flex items-center justify-between border-b-[1px] border-zinc-400 ">
      <div className="flex  flex-col items-center w-40 bg-zinc-400 dark:bg-zinc-800">
        <img
          src="/logo.jpg"
          alt="logo"
          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full"
        />
        <h1 className="hidden lg:block  lg:text-[9px] font-black text-blue-600 dark:text-zinc-50">
          JALMM
        </h1>
      </div>

      <Headermenu headermenu={headermenu} />
      <WhatsnewSection />
      <Profilesection />
      <ModeToggle />
      
    </div>
  );
}

export default Rootheader;
