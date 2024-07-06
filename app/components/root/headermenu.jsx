import React from "react";
import Link from "next/link";


function Headermenu({ headermenu }) {
  return (
    <div className="flex  justify-evenly items-baseline space-x-1 md:space-x-2 lg:space-x-6">
      {headermenu.map((item, index) => (
        <div
          key={index}
          className="flex items-center bg-slate-200 dark:bg-slate-600  px-3 py-1 rounded-sm shadow-md hover:shadow-lg hover:bg-slate-300 transition-all"
        >
          <Link
            href={item.path}
            className={`text-[8px] md:text-[10px] lg:text-xs font-bold text-zinc-500 hover:text-zinc-900 dark:text-zinc-50 dark:hover:text-zinc-300 transition-all `}
          >
            {item.name}
          </Link>
          <div className="mx-1 hidden md:block">
            {item.icon && <item.icon /> }
          </div>
        </div>
      ))}
    </div>
  );
}

export default Headermenu;
