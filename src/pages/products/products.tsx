import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ButtonReuseable, {
  productProps,
} from "../../components/reusable-components/ButtonReuseable";
import { ChevronUp } from "lucide-react";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import FilterByPrice from "./filter-by-price";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type searchDataType = {
  searchField: string;
};
type ProductsState = productProps["product"][];

const ProductPage = () => {
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState<ProductsState>([]);

  const form = useForm({
    defaultValues: {
      searchField: "",
    },
  });

  function onSubmit(data: searchDataType) {
    console.log(data);
  }

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    fetch("/product.json")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products?.[0]?.img);

  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 pb-5">
      <div className="py-5 bg-accent bg-opacity-15 my-5 px-5 flex flex-col gap-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex items-center border-2 border-background rounded bg-background"
          >
            <FormField
              control={form.control}
              name="searchField"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="placeholder:text-text bg-transparent rounded-e-none py-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
                      placeholder="Enter name or brand"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="rounded-s-none bg-transparent hover:bg-transparent"
              type="submit"
            >
              <Search className="text-text" />
            </Button>
          </form>
        </Form>
        <div className="flex md:justify-between md:flex-row flex-col items-center gap-y-5">
          <div className="md:w-2/5 w-full">
            <FilterByPrice />
          </div>

          <div className="md:w-1/3 w-full flex gap-x-3 justify-end">
            <Button
              className="md:w-1/2 w-full flex gap-x-2"
              onClick={handleToggle}
            >
              <span>Sort by Price</span>{" "}
              <ChevronUp
                className={`bg-white rounded-full text-primary ${
                  toggle
                    ? "rotate-[360deg] duration-500 transition-all"
                    : "rotate-[-180deg] duration-500 transition-all"
                }`}
              />
            </Button>
            <Button className="md:w-1/2 w-full">Clear All</Button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
        {products?.map((product: productProps["product"], idx: number) => (
          <Card
            className="group hover:shadow bg-transparent rounded-none border-none shadow-md shadow-gray-200"
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
                Quantity: {product?.quantity}
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
    </div>
  );
};

export default ProductPage;
