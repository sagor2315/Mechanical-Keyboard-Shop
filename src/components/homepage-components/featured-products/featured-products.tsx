import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import img1 from "../../../img/magegee2.jpg";
import img2 from "../../../img/magegee1.jpg";
import img3 from "../../../img/redragon.webp";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from "../../ui/button";
import HeadingTitle from "../../reusable-components/HeadingTitle";

const FeaturedProducts = () => {
  const productsList = [
    {
      img: img1,
      title: "Magegee Epomaker TH40",
      brand: "Magegee",
      quantity: 10,
      price: 70,
      rating: 4.5,
    },
    {
      img: img2,
      title: "Magegee Epomaker TH40",
      brand: "Magegee",
      quantity: 10,
      price: 70,
      rating: 4.5,
    },
    {
      img: img3,
      title: "Magegee Epomaker TH40",
      brand: "Magegee",
      quantity: 10,
      price: 70,
      rating: 4.5,
    },
    {
      img: img3,
      title: "Magegee Epomaker TH40",
      brand: "Magegee",
      quantity: 10,
      price: 70,
      rating: 4.5,
    },
    {
      img: img2,
      title: "Magegee Epomaker TH40",
      brand: "Magegee",
      quantity: 10,
      price: 70,
      rating: 4.5,
    },
    {
      img: img1,
      title: "Magegee Epomaker TH40",
      brand: "Magegee",
      quantity: 10,
      price: 70,
      rating: 4.5,
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 py-5">
      <HeadingTitle>{"Featured Products"}</HeadingTitle>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
        {productsList.map((product, idx) => (
          <Card
            className="bg-transparent rounded-none border-none shadow-md shadow-gray-200 "
            key={idx}
          >
            <div className="overflow-hidden">
              <img
                className="hover:scale-125 transition-all duration-500"
                src={product?.img}
                alt="imgage"
              />
            </div>
            <CardHeader className="p-2">
              <CardTitle className="text-xl">{product?.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-2">
              <Rating
                style={{ maxWidth: 120 }}
                value={product?.rating}
                readOnly
              />

              <p className="py-1 text-lg font-medium text-text">
                Brand: {product?.brand}
              </p>
              <p className="pb-1 text-lg font-medium text-text">
                Quantity: {product?.quantity}
              </p>
              <p className="pb-1 text-lg font-medium text-text">
                Price: ${product?.price}
              </p>
            </CardContent>
            <CardFooter className="pl-2 pb-2">
              <Button>See Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
