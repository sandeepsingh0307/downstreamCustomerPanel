import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { navLinks } from "../../lib/constant";
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
import Image from "next/image";

const userIsAuthenticated = false;

export const Header = () => {
  return (
    <header className="flex justify-between lg:justify-evenly   h-20 w-full shrink-0 items-center px-4 md:px-6 bg-primary">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
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
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 hidden lg:flex " prefetch={false}>
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Company<span className="text-primary">Name</span>
        </h1>
      </Link>
      <BoxCenter>
        <nav className="ml-auto hidden lg:flex gap-6">
          {navLinks.map((item, index) => {
            return (
              <Link
                href={item.href}
                className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors bg-transparent hover:bg-background text-white"
                // className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors   focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 bg-transparent"
                prefetch={false}
                key={`navDesktopItems${index}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <BoxCenter>
          <ToggleTheme />
          {!userIsAuthenticated ? (
            <Link
              className="px-4 py-2 bg-background  hover:bg-secondary text-foreground  rounded-md"
              href="/signin"
            >
              Sign In
            </Link>
          ) : null}
        </BoxCenter>
        <div>
          {userIsAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 rounded-full"
                >
                  <Image
                    src=""
                    width="32"
                    height="32"
                    className="rounded-full"
                    alt="Avatar"
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                {/* <DropdownMenuItem>Support</DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </div>
      </BoxCenter>
    </header>
  );
};

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
