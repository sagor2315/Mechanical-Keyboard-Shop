import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonReuseable, {
  productProps,
} from "../../components/reusable-components/ButtonReuseable";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

type ProductsState = productProps["product"][];

const ProductDetails = () => {
  const [products, setProducts] = useState<ProductsState>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch("/product.json")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  const singleProduct = products?.find((product) => product?.id === id);
  console.log(singleProduct);

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
              <span className="font-medium">{singleProduct?.quantity}</span>
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

          <ButtonReuseable>{"Add To Cart"}</ButtonReuseable>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
