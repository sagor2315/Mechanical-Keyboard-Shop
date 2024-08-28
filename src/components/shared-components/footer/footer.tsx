import { Facebook, Instagram, Keyboard, Twitter, Youtube } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

const Footer = () => {
  return (
    <div className="bg-text">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 grid-cols-1 md:px-5 px-4 text-white pt-5 gap-5">
        <div>
          <div className="lg:w-1/12 md:w-1/12 w-1/6">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <div className="font-semibold border-2 bg-primary border-primary rounded py-0.5 px-1">
                <Keyboard className="text-white" />
              </div>
              <p>
                <span className="text-primary text-xl font-bold">Key</span>
                <span className="text-accent text-xl font-bold">Land</span>
              </p>
            </NavLink>
          </div>
          <div className="py-5 lg:w-3/4 md:w-11/12">
            <p className="">
              Discover the world of mechanical keyboards, exploring the best
              switches, custom builds, and accessories for enthusiasts and
              beginners alike. Elevate your typing experience!
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="https://www.facebook.com/"
              className="bg-background rounded-full p-1"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Facebook className="text-primary h-5 w-5 hover:rotate-[360deg] hover:transition-all hover:duration-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>

            <Link
              to="https://www.instagram.com/"
              className="bg-background rounded-full p-1"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Instagram className="text-primary h-5 w-5 hover:rotate-[360deg] hover:transition-all hover:duration-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>

            <Link
              to="https://x.com/"
              className="bg-background rounded-full p-1"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Twitter className="text-primary h-5 w-5 hover:rotate-[360deg] hover:transition-all hover:duration-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>

            <Link
              to="https://www.youtube.com/"
              className="bg-background rounded-full p-1"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Youtube className="text-primary h-5 w-5 hover:rotate-[360deg] hover:transition-all hover:duration-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Youtube</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold pb-5">Contact</h3>
          <Link to="/aboutus">
            <h4>About Us</h4>
          </Link>
          <Link to="/contactus">
            <h4>Contact Us</h4>
          </Link>
        </div>
        <div>
          <h3 className="text-xl font-semibold pb-5">Others Relavent</h3>
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/product">
            <h4>Products</h4>
          </Link>
        </div>
      </div>

      <div className="text-center md:text-lg font-medium text-white pt-5">
        <p className="border-t border-t-gray-600 py-2">
          &copy; Copyright and All Right Reserve to KeyLand 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
