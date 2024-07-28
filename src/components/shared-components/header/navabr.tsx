import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

import { Button } from "../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { DialogTitle } from "../../ui/dialog";
import { Description } from "@radix-ui/react-dialog";
import { ShoppingCart } from "lucide-react";

import { Keyboard } from "lucide-react";

const Navabr = () => {
  return (
    <div className="sticky top-0 z-50 bg-background ">
      <header className="flex h-16 items-center justify-between gap-4 text-muted-foreground w-full max-w-screen-xl mx-auto px-4 md:px-5">
        <div className="hidden md:block">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <div className="font-semibold border-2 bg-primary border-primary rounded py-0.5 px-1">
              <Keyboard className="text-white" />
            </div>
            <div>
              <span className="text-primary text-xl font-bold">Key</span>
              <span className="text-accent text-xl font-bold">Land</span>
            </div>
          </NavLink>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="shrink-0 md:hidden bg-primary text-white"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <DialogTitle></DialogTitle>
            <Description></Description>
            <nav className="grid gap-6 text-lg font-medium">
              <NavLink
                to="/"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
              >
                <div className="font-semibold bg-primary rounded py-0.5 px-1">
                  <Keyboard className="text-white" />
                </div>
                <div>
                  <span className="text-primary text-xl font-bold">Key</span>
                  <span className="text-accent text-xl font-bold">Land</span>
                </div>
              </NavLink>
              <NavLink
                to="/"
                className="text-text transition-colors hover:text-primary hover:font-medium text-base"
              >
                Home
              </NavLink>
              <NavLink
                to="product"
                className="text-text transition-colors hover:text-primary hover:font-medium text-base"
              >
                Products
              </NavLink>
              <NavLink
                to="/aboutus"
                className="text-text transition-colors hover:text-primary hover:font-medium text-base"
              >
                About Us
              </NavLink>
              <NavLink
                to="/contactus"
                className="text-text transition-colors hover:text-primary hover:font-medium text-base"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/dashboard"
                className="text-text transition-colors hover:text-primary hover:font-medium text-base"
              >
                Dashboard
              </NavLink>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center md:gap-5 lg:gap-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <NavLink
              to="/"
              className="text-text transition-colors hover:text-primary hover:font-medium text-base"
            >
              Home
            </NavLink>
            <NavLink
              to="/product"
              className="text-text transition-colors hover:text-primary hover:font-medium text-base"
            >
              Products
            </NavLink>
            <NavLink
              to="/aboutus"
              className="text-text transition-colors hover:text-primary hover:font-medium text-base"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contactus"
              className="text-text transition-colors hover:text-primary hover:font-medium text-base"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/dashboard"
              className="text-text transition-colors hover:text-primary hover:font-medium text-base"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/dashboard"
              className="text- transition-colors hover:text-primary hover:font-medium text-base"
            >
              <div className="relative h-10 w-10 bg-primary rounded flex justify-center items-center">
                <ShoppingCart className="text-white absolute bottom-1" />
                <p className="absolute inset-0 flex justify-center items-center -top-6 text-white z-10">
                  0
                </p>
              </div>
            </NavLink>
          </nav>
          <div className="md:hidden text-text transition-colors hover:text-primary hover:font-medium text-base">
            <div className="relative h-10 w-10 bg-primary rounded flex justify-center items-center">
              <ShoppingCart className="text-white absolute bottom-1" />
              <p className="absolute inset-0 flex justify-center items-center -top-6 text-white z-10">
                0
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navabr;
