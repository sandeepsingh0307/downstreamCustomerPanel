import React from "react";
import { navLinks } from "../../../lib/constant";
import Link from "next/link";

const Navbar_mobile = () => {
  return (
    <>
      <div className="grid gap-2 py-6">
        {navLinks.map((item, index) => {
          return (
            <Link
              href={item.href}
              className="flex w-full items-center py-2 text-lg font-semibold bg-transparent"
              prefetch={false}
              key={`navMobileItems${index}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navbar_mobile;
