// "use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import ToggleTheme from "../layout/ToggleTheme";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-red-600 py-3">
      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
      <div className="flex gap-5">
        <ToggleTheme />
        <Link
          className="px-4 py-2  hover:bg-secondary text-foreground  rounded-md"
          href="/signin"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
