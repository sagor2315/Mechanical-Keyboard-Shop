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
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/features/allProductsApi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

type searchDataType = {
  searchField: string;
};

const ProductPage = () => {
  const [searchItem, setSearchItem] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("desc");

  const [toggle, setToggle] = useState<boolean>(false);

  const { data } = useGetAllProductsQuery({
    searchItem,
    minPrice,
    maxPrice,
    sortOrder,
  });
  const productsAll = data?.data;

  const form = useForm({
    defaultValues: {
      searchField: "",
    },
  });

  function onSubmit(data: searchDataType) {
    setSearchItem(data?.searchField);
  }

  const handleToggle = () => {
    setToggle(!toggle);
    setSortOrder((provider) => (provider === "desc" ? "asc" : "desc"));
  };

  const handleClearAll = () => {
    setSortOrder("desc");
    setMaxPrice(null);
    setMinPrice(null);
    setSearchItem("");
  };

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
            <FilterByPrice
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>

          <div className="md:w-1/3 w-full flex gap-x-3 justify-end">
            <Button
              className="md:w-1/2 w-full flex gap-x-2 hover:bg-accent hover:transition-all hover:duration-500 transition-all duration-1000"
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
            <Button
              onClick={handleClearAll}
              className="md:w-1/2 w-full hover:bg-accent hover:transition-all hover:duration-500 transition-all duration-1000"
            >
              Clear All
            </Button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
        {productsAll?.map((product: productProps["product"], idx: number) => (
          <Card
            className="group hover:shadow bg-transparent rounded-none border-none shadow-md shadow-gray-200"
            key={idx}
          >
            <div className="group overflow-hidden">
              <img
                className="group group-hover:scale-125 transition-all duration-500"
                src={product?.image}
                alt="imgage"
              />
            </div>
            <CardHeader className="p-2 h-[70px]">
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
    </div>
  );
};

export default ProductPage;
