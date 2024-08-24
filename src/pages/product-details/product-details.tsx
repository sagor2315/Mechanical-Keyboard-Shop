import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productProps } from "../../components/reusable-components/ButtonReuseable";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from "../../components/ui/button";
import { addToCart } from "../../redux/features/cartSlice";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

type ProductsState = productProps["product"][];

const ProductDetails = () => {
  const [products, setProducts] = useState<ProductsState>([]);
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const stockAll = useAppSelector((state) => state?.cart?.stockAll);
  console.log(stockAll);

  useEffect(() => {
    fetch("/product.json")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  // console.log(products);

  const singleProduct = products?.find((product) => product?.id === id);
  // console.log(singleProduct);

  const handleAddToCart = () => {
    if (!singleProduct) {
      return;
    }

    if (singleProduct.stock > 0) {
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
          <img src={singleProduct?.img} alt="img" />
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
              <span className="font-medium">{singleProduct?.stock}</span>
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

          {/* <ButtonReuseable>{"Add To Cart"}</ButtonReuseable> */}
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
