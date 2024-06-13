import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import MenuIcon from "./MenuIcon";

const HamburgerIcon = () => {
  return (
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="lg:hidden">
        <MenuIcon className="h-6 w-6" />
      </Button>
    </SheetTrigger>
  );
};

export default HamburgerIcon;
