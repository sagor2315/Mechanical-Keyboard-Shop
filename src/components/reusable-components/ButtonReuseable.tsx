import { ReactNode } from "react";
import { Button } from "../ui/button";

export type productProps = {
  product: {
    _id: string;
    image: string;
    title: string;
    brand: string;
    stock: number;
    quantity: number;
    price: number;
    rating: number;
    description: string;
  };
};

type ButtonProps = {
  children: ReactNode;
};

const ButtonReuseable = ({ children }: ButtonProps) => {
  return (
    <div>
      <Button className="hover:bg-accent hover:transition-all hover:duration-500 transition-all duration-1000">
        {children}
      </Button>
    </div>
  );
};

export default ButtonReuseable;
