"use client";
import { Sheet, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import BoxCenter from "./BoxCenter";
import ToggleTheme from "./ToggleTheme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
// import Image from "next/image";
import { useAuth } from "./AuthContext";

import HamburgerIcon from "./HamburgerIcon";
import Navbar_mobile from "../content/Navbar/Navbar_mobile";
import Navbar_desktop from "../content/Navbar/Navbar_desktop";

export const Header = () => {
  const { logout, user } = useAuth();

  const isUserAuthenticated = true;

  return (
    <header className="flex justify-between lg:justify-evenly   h-20 w-full shrink-0 items-center px-4 md:px-6 bg-primary">
      <Sheet>
        <HamburgerIcon />
        <SheetContent side="left">
          <Navbar_mobile />
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 hidden lg:flex " prefetch={false}>
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Company<span className="text-primary">Name</span>
        </h1>
      </Link>
      <BoxCenter>
        <Navbar_desktop />
        <BoxCenter>
          <ToggleTheme />
          {!isUserAuthenticated ? (
            <Link
              className="px-4 py-2 bg-background  hover:bg-secondary text-foreground  rounded-md"
              href="/signin"
            >
              Sign In
            </Link>
          ) : null}
        </BoxCenter>
        <div>
          {isUserAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className=" h-fit w-fit ">
                  <div className="flex flex-col py-2 px-4  justify-center items-center">
                    Hello
                    <span>{user?.name}</span>
                  </div>
                  {/* <Image
                    src=""
                    width="32"
                    height="32"
                    className="rounded-full"
                    alt="Avatar"
                  /> */}
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                {/* <DropdownMenuItem>Support</DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <div
                  onClick={() => {
                    logout();
                  }}
                >
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </div>
      </BoxCenter>
    </header>
  );
};
