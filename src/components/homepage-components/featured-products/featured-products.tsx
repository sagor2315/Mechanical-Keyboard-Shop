import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import HeadingTitle from "../../reusable-components/HeadingTitle";
import { Link, NavLink } from "react-router-dom";
import ButtonReuseable, {
  productProps,
} from "../../reusable-components/ButtonReuseable";
import { useEffect, useState } from "react";

type ProductsState = productProps["product"][];

const FeaturedProducts = () => {
  const [products, setProducts] = useState<ProductsState>([]);
  useEffect(() => {
    fetch("/product.json")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  // console.log(products);

  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 pt-5">
      <HeadingTitle>{"Featured Products"}</HeadingTitle>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
        {products.map((product, idx) => (
          <Card
            className="group hover:shadow bg-transparent rounded-none border-none shadow-md shadow-gray-200 "
            key={idx}
          >
            <div className="group overflow-hidden">
              <img
                className="group group-hover:scale-125 transition-all duration-500"
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
                Quantity: {product?.stock}
              </p>
              <p className="pb-1 text-lg font-medium text-text">
                Price: ${product?.price}
              </p>
            </CardContent>
            <CardFooter className="pl-2 pb-2">
              <Link to={`/show-details/${product?.id}`}>
                <ButtonReuseable>{"See Details"}</ButtonReuseable>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center pt-10 pb-5">
        <NavLink to="/product">
          <ButtonReuseable>{"See More"}</ButtonReuseable>
        </NavLink>
      </div>
    </div>
  );
};

export default FeaturedProducts;
