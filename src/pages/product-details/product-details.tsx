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
  // console.log(productsAll);

  const { id } = useParams<{ id: string }>();
  // console.log(id);

  const dispatch = useAppDispatch();

  const cartData = useAppSelector((state) => state?.cart?.cartData);

  let specificProduct;
  if (cartData) {
    specificProduct = cartData.find((data) => data?._id === id);
    // console.log(specificProduct);
  }

  const singleProduct = productsAll?.find((product) => product?._id === id);
  // console.log(singleProduct);

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
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 py-5 bg-background lg:h-[calc(100vh-70px)] ">
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
            <div>
              <p>{singleProduct?.description}</p>
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={singleProduct?.stock === 0}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
