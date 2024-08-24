import { ReactNode } from "react";
import { Button } from "../ui/button";

export type productProps = {
  product: {
    id: string;
    img: string;
    title: string;
    brand: string;
    stock: number;
    quantity: number;
    price: number;
    rating: number;
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
