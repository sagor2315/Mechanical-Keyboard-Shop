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

import { useGetAllProductsQuery } from "../../../redux/features/allProductsApi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { Button } from "../../ui/button";

const FeaturedProducts = () => {
  const { data } = useGetAllProductsQuery({
    searchItem: "",
    minPrice: null,
    maxPrice: null,
    sortOrder: "",
  });
  const productsAll = data?.data.slice(0, 6) as productProps["product"][];
  // console.log(productsAll);

  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 pt-5">
      <HeadingTitle>{"Featured Products"}</HeadingTitle>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
        {productsAll?.map((product, idx) => (
          <Card
            className="group hover:shadow bg-transparent rounded-none border-none shadow-md shadow-gray-200 "
            key={idx}
          >
            <div className="group overflow-hidden h-[265px]">
              <img
                className="group group-hover:scale-125 transition-all duration-500 object-cover h-full"
                src={product?.image}
                alt="imgage"
              />
            </div>
            <CardHeader className="p-2">
              <CardTitle className="text-xl">
                {product?.title.slice(0, 65)}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        className="p-1.5 bg-transparent hover:bg-transparent shadow-none border-none hover:text-text"
                      >
                        ...
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="w-60">
                      <p>{product?.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardTitle>
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
              <Link to={`/show-details/${product?._id}`}>
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
