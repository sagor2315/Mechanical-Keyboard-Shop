import HeadingTitle from "../../reusable-components/HeadingTitle";

import accessories1 from "../../../img/accessories/1_.webp";
import accessories2 from "../../../img/accessories/2.webp";
import accessories3 from "../../../img/accessories/3.webp";
import accessories4 from "../../../img/accessories/4_.webp";
import accessories5 from "../../../img/accessories/5_.webp";
import accessories6 from "../../../img/accessories/6_.webp";
import accessories7 from "../../../img/accessories/7.webp";
import accessories8 from "../../../img/accessories/8_.webp";

const accessoriesList = [
  { img: accessories1, title: "Metal Switch Opener" },
  { img: accessories2, title: "Keyboard Wrist Rest Pad" },
  { img: accessories3, title: "Keyboard Hand Rest Pad" },
  { img: accessories4, title: "Keyboard Cover Skin" },
  { img: accessories5, title: "Keyboard Stand" },
  { img: accessories6, title: "Coiled USB C Cable" },
  { img: accessories7, title: "Memory Foam Keyboard" },
  { img: accessories8, title: "Keyboard Case" },
];

const KeyboardAccessories = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 pb-5 pt-10">
      <HeadingTitle>{"Keyboard Accessories"}</HeadingTitle>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        {accessoriesList.map((data, idx) => (
          <div
            key={idx}
            className="group h-40 relative bg-white overflow-hidden "
          >
            <img
              className="group-hover:scale-125 group-hover:transition-all group-hover:duration-500 duration-500 transition-all w-full h-full p-5 object-cover overflow-hidden"
              src={data?.img}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardAccessories;
