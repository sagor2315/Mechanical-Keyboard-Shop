import { useForm } from "react-hook-form";

import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Card } from "../../components/ui/card";
import { HandCoins } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeAllDataFromCart } from "../../redux/features/cartSlice";
import { useUpdateProductStockMutation } from "../../redux/features/updateProductsStock";

type Checkooutprops = {
  name: string;
  email: string;
  phone: string;
  deliveryAdd: string;
  cash: boolean;
};

const CheckoutPage = () => {
  const [updateProductStock] = useUpdateProductStockMutation();
  const cartData = useAppSelector((state) => state?.cart?.cartData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      deliveryAdd: "",
      cash: false,
    },
  });

  const { name, email, phone, deliveryAdd, cash } = form.watch();

  function onSubmit(values: Checkooutprops) {
    console.log(values);
    handleSuccessPage();
  }

  const handleSuccessPage = () => {
    navigate("/success-page");
    dispatch(removeAllDataFromCart());
    const productInfo = cartData;
    updateProductStock(productInfo);
  };

  const isFormValid = name && email && phone && deliveryAdd && cash;

  console.log(cartData);

  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 py-5 bg-background">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <div className="flex flex-col gap-y-3 h-[150px]">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Input placeholder="phone" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="h-[150px]">
              <FormField
                control={form.control}
                name="deliveryAdd"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Bio</FormLabel> */}
                    <FormControl>
                      <Textarea
                        placeholder="Enter your delivery address"
                        className="resize-none h-[144px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="pt-0">
            <div>
              <h3 className="text-lg font-medium text-text">
                Cash On Delivery
              </h3>
              <p>Pay after receiving the product</p>
            </div>
            <Card className="lg:w-1/4 md:w-1/2 w-10/12 p-6 mt-3 rounded-none bg-accent bg-opacity-15">
              <FormField
                control={form.control}
                name="cash"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    {/* <FormLabel>Notify me about...</FormLabel> */}
                    <FormControl>
                      <RadioGroup
                        value={field.value.toString()}
                        onValueChange={(value) =>
                          field.onChange(value === "true")
                        }
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value="true"
                              className="border-2 border-text"
                            />
                          </FormControl>
                          <HandCoins />
                          <FormLabel className="font-normal">
                            <h4 className="text-lg font-medium text-text">
                              Cash On Delivery
                            </h4>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Card>
          </div>

          <Button
            onClick={handleSuccessPage}
            className="mt-8 hover:bg-accent hover:transition-all hover:duration-500 transition-all duration-1000"
            type="submit"
            disabled={!isFormValid}
          >
            Confirm order
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default CheckoutPage;
