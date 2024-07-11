import { Menu, Package2 } from "lucide-react";
import { NavLink } from "react-router-dom";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "../../ui/dropdown-menu";
import { Button } from "../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { DialogTitle } from "../../ui/dialog";
import { Description } from "@radix-ui/react-dialog";
import { ModeToggle } from "../../mode-toggle";
import img from "../../../img/keyboard-key.png";

const Navabr = () => {
  return (
    <div>
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-[#F5F5F5] px-4 md:px-6">
        <div className="hidden md:block">
          <NavLink
            to=""
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <div className="font-semibold border-2 rounded py-0.5 px-1">
              <img src={img} alt="" />
            </div>
            {/* <p>MKS</p> */}
            <span className="sr-only">MKS</span>
          </NavLink>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
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
                to=""
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </NavLink>
              <NavLink
                to=""
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </NavLink>
              <NavLink
                to=""
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </NavLink>
              <NavLink
                to=""
                className="text-muted-foreground hover:text-foreground"
              >
                About Us
              </NavLink>
              <NavLink
                to=""
                className="text-muted-foreground hover:text-foreground"
              >
                Contact Us
              </NavLink>
              <NavLink to="" className="hover:text-foreground">
                Dashboard
              </NavLink>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center md:gap-5 lg:gap-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <NavLink
              to=""
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </NavLink>
            <NavLink
              to=""
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Products
            </NavLink>
            <NavLink
              to=""
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About Us
            </NavLink>
            <NavLink
              to=""
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact Us
            </NavLink>
            <NavLink
              to=""
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </NavLink>
          </nav>
          <ModeToggle />
          {/* <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div> */}
        </div>
      </header>
    </div>
  );
};

export default Navabr;
