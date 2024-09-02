import { Card, CardContent } from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  CartTypes,
  decreaseProductQuantity,
  increaseProductQuantity,
  removeDataFromCart,
} from "../../redux/features/cartSlice";
import { useEffect } from "react";

const CartPage = () => {
  const navigate = useNavigate();

  const cartData = useAppSelector((state) => state?.cart?.cartData);
  const totalPrice = useAppSelector((state) => state?.cart?.totalPrice);
  const totalQuantity = useAppSelector((state) => state?.cart?.totalQuantity);
  // const stockAll = useAppSelector((state) => state?.cart?.stockAll);
  // console.log(stockAll);

  const dispatch = useAppDispatch();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleIncrease = (data: CartTypes) => {
    if (data && data.stock > 0) {
      dispatch(increaseProductQuantity(data._id));
    } else {
      console.log("Cannot increase quantity beyond available stock.");
    }
  };

  const handleDecrease = (data: CartTypes) => {
    if (data && data.quantity > 0) {
      dispatch(decreaseProductQuantity(data._id));
    } else {
      console.log("Cannot decrease quantity below 1.");
    }
  };

  const handleRemoveCart = (data: CartTypes) => {
    dispatch(removeDataFromCart(data?._id));
    console.log(data?._id);
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartData.length > 0) {
        const message = "Are you sure you want to leave?";
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartData]);

  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 py-5 bg-background min-h-[calc(100vh-200px)]">
      <Card
        x-chunk="dashboard-06-chunk-0"
        className=" bg-background rounded-none"
      >
        <CardContent className=" p-0">
          <Table>
            <TableBody>
              <TableRow className="p-0.5">
                {cartData.length === 0 ? (
                  <TableCell>
                    <ul>
                      <li className="text-lg font-medium">The cart is empty</li>
                    </ul>
                  </TableCell>
                ) : (
                  cartData.map((data) => (
                    <TableCell
                      key={data?._id}
                      className="flex justify-between items-center"
                    >
                      <ul className="flex gap-5">
                        <img
                          alt="Product image"
                          className="rounded-md object-cover"
                          // height="100"
                          src={data?.image}
                          width="100"
                        />
                        <ul>
                          <li className="md:text-xl text-lg font-semibold">
                            {data?.title}
                          </li>
                          <li className="text-lg my-2">
                            Quantity: {data?.stock}
                          </li>

                          <li className="flex gap-x-5 items-center">
                            <Button
                              onClick={() => handleRemoveCart(data)}
                              variant="outline"
                              className="border-none p-0 hover:bg-transparent hover:text-text"
                            >
                              <Trash2 className="text-text" />
                            </Button>

                            <div className="flex gap-0.5 border md:hidden">
                              <Button
                                onClick={() => handleDecrease(data)}
                                variant="outline"
                                className="px-1 h-8 rounded-none hover:bg-none bg-transparent hover:bg-transparent bg-[#e6e6e6] text-text  flex justify-center items-center"
                              >
                                <Minus className="text-text" />
                              </Button>
                              <div className=" px-3 h-8 bg-primary text-white text-base flex justify-center items-center">
                                {data?.quantity}
                              </div>
                              <Button
                                onClick={() => handleIncrease(data)}
                                className=" px-1 h-8 rounded-none  bg-transparent hover:bg-transparent bg-[#e6e6e6]  text-text  flex justify-center items-center"
                              >
                                <Plus />
                              </Button>
                            </div>
                            <div className="text-center text-lg font-[450] md:hidden">
                              <p>{data?.totalPrice} TK.</p>
                            </div>
                          </li>
                        </ul>
                      </ul>
                      <ul className="md:block hidden">
                        <div className="flex gap-0.5 border">
                          <Button
                            onClick={() => handleDecrease(data)}
                            variant="outline"
                            className="px-1 h-8 rounded-none hover:bg-none bg-transparent hover:bg-transparent bg-[#e6e6e6] text-text  flex justify-center items-center"
                          >
                            <Minus className="text-text" />
                          </Button>
                          <div className=" px-3 h-8 bg-primary text-white text-base flex justify-center items-center">
                            {data?.quantity}
                          </div>
                          <Button
                            onClick={() => handleIncrease(data)}
                            className=" px-1 h-8 rounded-none  bg-transparent hover:bg-transparent bg-[#e6e6e6]  text-text  flex justify-center items-center"
                          >
                            <Plus />
                          </Button>
                        </div>
                        <div className="text-center pt-5 text-lg font-medium">
                          <p>{data?.totalPrice} TK.</p>
                        </div>
                      </ul>
                    </TableCell>
                  ))
                )}
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card
        x-chunk="dashboard-06-chunk-0"
        className=" bg-background rounded-none mt-5"
      >
        <Table>
          <TableBody>
            <TableRow className="flex justify-between items-center p-0">
              <TableCell className="text-lg font-medium">
                Total Quantity
              </TableCell>
              <TableCell className="text-lg font-medium">
                {totalQuantity}
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-between items-center p-0">
              <TableCell className="text-lg font-medium">
                Total Payable
              </TableCell>
              <TableCell className="text-lg font-medium">
                {totalPrice} TK.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      <div className="mt-5 flex justify-end">
        <Button
          onClick={handleCheckout}
          disabled={totalQuantity === 0}
          className="hover:bg-accent hover:transition-all hover:duration-500 transition-all duration-1000"
        >
          Chekout Now
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
