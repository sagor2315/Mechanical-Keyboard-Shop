import HeadingTitle from "../../reusable-components/HeadingTitle";
import { Card, CardHeader, CardTitle } from "../../ui/card";
import Magegee_logo from "../../../img/logos/Magegee-logo2.png";
import Logitech_logo from "../../../img/logos/logitech-logo-01.png";
import Redragon_logo from "../../../img/logos/Redragon-logo2.png";
import EPOMAKER_logo from "../../../img/logos/Epomaker-logo-01.png";
import B8itdo_logo from "../../../img/logos/8bitdo-logo-01.png";
import KEMOVE_logo from "../../../img/logos/keymove-logo.png";

import "./feature.brands.css";

const FeaturedBrands = () => {
  const brandsList = [
    { brand: "Magegee", img: Magegee_logo },
    { brand: "Logitech", img: Logitech_logo },
    { brand: "Redragon", img: Redragon_logo },
    { brand: "Epomaker", img: EPOMAKER_logo },
    { brand: "8Bitdo", img: B8itdo_logo },
    { brand: "Kemove", img: KEMOVE_logo },
    // "XISOGUU",
  ];
  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 pt-5 pb-10">
      <HeadingTitle>{"Featured Brands"}</HeadingTitle>

      <div className="grid lg:grid-cols-3 grid-cols-2 items-center gap-5">
        {brandsList.map((brand, idx) => (
          <Card
            className="group rounded-none bg-transparent transition-all hover:bg-slide"
            key={idx}
          >
            <CardHeader className="flex md:flex-row flex-col items-center md:p-6 p-3 justify-center md:gap-x-5 gap-y-0 w-full">
              <div className="md:w-2/3">
                <img className="w-full" src={brand?.img} alt="" />
              </div>
              <CardTitle className="text-center p-0 md:w-2/6 md:text-xl text-base group-hover:text-white group-hover:scale-125">
                {brand?.brand}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBrands;
