"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Homesidemenu from "../sidemenu/home";

function Sidebar() {
  const pathname = usePathname();
  return (
    <>
      <div className="w-40 bg-zinc-600 text-white h-screen">
        <div>
          {pathname === "/" && <div>
            <Homesidemenu />
            </div>}
          {pathname === "/assets" && <div>Assets</div>}
          {pathname === "/materials" && <div>Materials</div>}
          {pathname === "/vendors" && <div>Vendors</div>}
          {pathname === "/purchases" && <div>Purchases</div>}
          {pathname === "/projects" && <div>Projects</div>}
          {pathname === "/telecom" && <div>Telecom</div>}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
