import { useParams } from "react-router-dom";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from "../../components/ui/button";
import { addToCart } from "../../redux/features/cartSlice";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useGetAllProductsQuery } from "../../redux/features/allProductsApi";
import { productProps } from "../../components/reusable-components/ButtonReuseable";

const ProductDetails = () => {
  const { data } = useGetAllProductsQuery({
    searchItem: "",
    minPrice: null,
    maxPrice: null,
    sortOrder: "",
  });
  const productsAll = data?.data as productProps["product"][];

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const cartData = useAppSelector((state) => state?.cart?.cartData);

  let specificProduct;
  if (cartData) {
    specificProduct = cartData.find((data) => data?._id === id);
  }

  const singleProduct = productsAll?.find((product) => product?._id === id);

  const handleAddToCart = () => {
    if (!singleProduct) {
      return;
    }

    if (singleProduct?.stock > 0) {
      dispatch(addToCart(singleProduct));
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "The product is out of stock!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 py-5 bg-background">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div>
          <img src={singleProduct?.image} alt="img" />
        </div>
        <div>
          <h1 className="md:text-2xl text-[20px] text-text font-semibold">
            {singleProduct?.title}
          </h1>

          <div className="py-3 flex flex-col gap-y-1">
            <p>
              <span className="font-semibold">Brand:</span>{" "}
              <span className="font-medium">{singleProduct?.brand}</span>
            </p>
            <p>
              <span className="font-semibold">Stock:</span>{" "}
              <span className="font-medium">
                {specificProduct?.stock || specificProduct?.stock === 0
                  ? specificProduct?.stock
                  : singleProduct?.stock}
              </span>
            </p>
            <p>
              <span className="font-semibold">Price:</span>{" "}
              <span className="font-medium">${singleProduct?.price}</span>
            </p>
            <div className="flex gap-x-2">
              {singleProduct?.rating ?? 0}
              <Rating
                style={{ maxWidth: 120 }}
                value={singleProduct?.rating ?? 0}
                readOnly
              />
            </div>
          </div>

          <Button
            className="hover:bg-accent hover:transition-all hover:duration-500 transition-all duration-1000"
            onClick={handleAddToCart}
            disabled={singleProduct?.stock === 0}
          >
            Add To Cart
          </Button>
          <div className="pt-2 md:hidden lg:block">
            <h3 className="text-text font-semibold text-xl py-1">
              About This Product
            </h3>
            <p>{singleProduct?.description.slice(0, 283)}</p>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <p>{singleProduct?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
