import React from "react";
import { navLinks } from "../../../lib/constant";
import Link from "next/link";

const Navbar_desktop = () => {
  return (
    <nav className="ml-auto hidden lg:flex gap-6">
      {navLinks.map((item, index) => {
        return (
          <Link
            href={item.href}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors bg-transparent hover:bg-background"
            // className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors   focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 bg-transparent"
            prefetch={false}
            key={`navDesktopItems${index}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar_desktop;
