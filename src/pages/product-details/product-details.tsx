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
    <div>
      <div>
        <img src={singleProduct?.img} alt="img" />
      </div>
      <h1>{singleProduct?.title}</h1>

      <p>{singleProduct?.brand}</p>
      <p> {singleProduct?.quantity}</p>
      <p>{singleProduct?.price}</p>

      <Rating
        style={{ maxWidth: 120 }}
        value={singleProduct?.rating ?? 0}
        readOnly
      />
      <ButtonReuseable>{"Add To Cart"}</ButtonReuseable>
    </div>
  );
};

export default ProductDetails;
