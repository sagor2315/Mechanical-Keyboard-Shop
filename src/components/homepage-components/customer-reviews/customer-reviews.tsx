import { Card, CardContent } from "../../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

import HeadingTitle from "../../reusable-components/HeadingTitle";

import avarter1 from "../../../img/avarter/10.jpg";
import avarter2 from "../../../img/avarter/11.jpg";
import avarter3 from "../../../img/avarter/12.jpg";
import avarter4 from "../../../img/avarter/13.jpg";
import avarter5 from "../../../img/avarter/14.jpg";
import avarter6 from "../../../img/avarter/15.jpg";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

const customerInfo = [
  {
    img: avarter1,
    name: "Sarah M",
    rating: 4.7,
    comment:
      "The keyboard I purchased exceeded my expectations. The build quality and typing experience are fantastic!",
  },
  {
    img: avarter2,
    name: " Alex P",
    rating: 4.5,
    comment:
      "Excellent customer service and fast shipping. The customization options were amazing. Highly recommend!",
  },
  {
    img: avarter3,
    name: " Emily R",
    rating: 4.3,
    comment:
      "Great selection of keyboards and accessories. Found exactly what I was looking for. Will buy again.",
  },
  {
    img: avarter4,
    name: "John T",
    rating: 4.1,
    comment:
      "The detailed product descriptions and helpful guides made it easy to choose the perfect keyboard.",
  },
  {
    img: avarter5,
    rating: 4.5,
    comment:
      "Very good buying experience till now! Hope will buy again another fefature of my current brand",
  },
  {
    img: avarter6,
    name: "David Kim",
    rating: 3.9,
    comment:
      "Good prices and a solid range of options. My only issue was with the delayed delivery",
  },
];

const CustomerReviews = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 pt-5 pb-5">
      <HeadingTitle>{"Customer Reviews"}</HeadingTitle>

      <div className="flex justify-center shadow py-5 bg-accent bg-opacity-10">
        <Carousel className="w-full max-w-screen-md">
          <CarouselContent className="-ml-1">
            {customerInfo.map((customer, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="w-full h-full">
                    <CardContent className="flex flex-col justify-center w-full p-4">
                      <div className="flex flex-col items-center">
                        <img
                          className="rounded-full p-3 w-36"
                          src={customer?.img}
                          alt=""
                        />

                        <h4 className="text-lg font-medium text-text pb-2">
                          {customer?.name}
                        </h4>

                        <Rating
                          style={{ maxWidth: 120 }}
                          value={customer?.rating}
                          readOnly
                        />
                      </div>
                      <div className="flex gap-2">
                        <p className="text-center pt-3">
                          {customer?.comment?.substring(0, 70)}{" "}
                          <span>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span className="cursor-pointer">...</span>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="break-all w-36">
                                    {customer?.comment}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default CustomerReviews;
