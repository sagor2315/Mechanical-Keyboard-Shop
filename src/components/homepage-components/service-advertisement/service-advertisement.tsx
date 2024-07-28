import freeSheeping from "../../../img/free-shipping.png";
import lowstDele from "../../../img/lowatDelevery.png";
import support from "../../../img/serviceAdd1.png";
import cashon from "../../../img/cashondele.png";

const ServiceAdvertisement = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 pt-10 pb-5">
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-3">
        <div className="flex items-center gap-2 group pl-3 shadow-md shadow-gray-200 hover:shadow bg-transparent text-center py-5 overflow-hidden relative">
          <div className=" flex justify-start w-16 p-3 bg-text  rounded-full transform transition-all duration-300">
            <img
              src={freeSheeping}
              alt=""
              className="group-hover:filter group-hover:grayscale group-hover:scale-110 transition-all duration-300"
            />
          </div>
          <p className=" text-text  group-hover:scale-110 transition-all duration-300 text-base font-medium">
            Free Shipping
          </p>
        </div>
        <div className="flex items-center gap-2 group pl-3 border-none bg-transparent text-center py-5 hover:shadow  shadow-md shadow-gray-200 overflow-hidden relative">
          <div className=" flex justify-start w-16 p-3 bg-text  rounded-full transform transition-all duration-300">
            <img
              src={lowstDele}
              alt=""
              className="group-hover:filter group-hover:grayscale group-hover:scale-110 transition-all duration-300"
            />
          </div>
          <p className=" text-text  group-hover:scale-110 transition-all duration-300 text-base font-medium">
            Lowest Delivery Charge
          </p>
        </div>
        <div className="flex items-center gap-2 group pl-3 border-none bg-transparent text-center py-5 hover:shadow  shadow-md shadow-gray-200 overflow-hidden relative">
          <div className=" flex justify-start w-16 p-3 bg-text  rounded-full transform transition-all duration-300">
            <img
              src={support}
              alt=""
              className="group-hover:filter group-hover:grayscale group-hover:scale-110 transition-all duration-300"
            />
          </div>
          <p className=" text-text  group-hover:scale-110 transition-all duration-300 text-base font-medium">
            24/7 Support
          </p>
        </div>
        <div className="flex items-center gap-2 group pl-3 border-none bg-transparent text-center py-5 hover:shadow  shadow-md shadow-gray-200 overflow-hidden relative">
          <div className=" flex justify-start w-16 p-3 bg-text  rounded-full transform transition-all duration-300">
            <img
              src={cashon}
              alt=""
              className="group-hover:filter group-hover:grayscale group-hover:scale-110 transition-all duration-300"
            />
          </div>
          <p className=" text-text  group-hover:scale-110 transition-all duration-300 text-base font-medium">
            Cash On Delevery
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdvertisement;
