import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import img1 from "../../../img/Untitled-1.png";
import img2 from "../../../img/another.png";

import imgage1 from "../../../img/image1.png";
import imgage2 from "../../../img/image2.png";
import imgage3 from "../../../img/image3.png";
import imgage4 from "../../../img/image4.png";
import imgage5 from "../../../img/image5.png";
import imgage6 from "../../../img/image7.png";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import { Card, CardContent } from "../../ui/card";
import { Progress } from "../../ui/progress";

const images = [
  { brand: "Magegee", img: imgage1, discount: 25 },
  { brand: "Logitech", img: imgage2, discount: 20 },
  { brand: "Redragon", img: imgage3, discount: 15 },
  { brand: "EPOMAKER", img: imgage4, discount: 30 },
  { brand: "8Bitdo", img: imgage5, discount: 28 },
  { brand: "KEMOVE", img: imgage6, discount: 10 },
];
export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="">
      <div className="grid lg:grid-cols-12 gap-3 w-full h-[calc(100vh-64px)]">
        <div className="col-span-8 row-span-6 w-full h-full flex">
          <Carousel
            plugins={[plugin.current]}
            className="w-full h-full border-none"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="h-full">
              {images.map((data, index) => (
                <CarouselItem key={index} className="h-full relative bottom-0">
                  <Card className="rounded-none border-none h-full  shadow-none">
                    <CardContent className="flex items-center justify-center p-0 rounded-0  h-[calc(100vh-64px)]">
                      <div className="absolute  inset-0 flex flex-col justify-center bg-black bg-opacity-60">
                        <div className="flex gap-2 justify-center items-center py-2">
                          <h2 className="bg-primary rounded-full px-5 py-2 text-white md:text-5xl text-2xl font-semibold">
                            Brand
                          </h2>
                          <h2 className="md:text-7xl text-4xl font-bold text-white">
                            {data?.brand}
                          </h2>
                        </div>

                        <div className="text-center rounded py-3 md:w-1/2 w-4/6 mx-auto">
                          <Progress
                            value={data?.discount}
                            aria-label="25% increase"
                            className="bg-accent"
                          />
                          <p className="bg-primary rounded-full mt-3 py-1 text-white">
                            +{data?.discount}% off this week
                          </p>
                        </div>
                      </div>
                      <img
                        className="object-cover h-full w-full"
                        src={data?.img}
                        alt={`img${index + 1}`}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="hidden lg:block lg:col-span-4 col-span-8 row-span-3 bg-black bg-opacity-60">
          <img src={img1} className="object-cover h-full w-full" alt="" />
        </div>

        <div className="hidden lg:block row-span-3 lg:col-span-4 col-span-8">
          <img src={img2} className="object-cover h-full w-full" alt="" />
        </div>
      </div>
    </div>
  );
}
