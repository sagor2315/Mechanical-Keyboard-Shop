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

type Checkooutprops = {
  name: string;
  email: string;
  phone: string;
  deliveryAdd: string;
  cash: boolean;
};

const CheckoutPage = () => {
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

  const cashOnDelivery = form.watch("cash");

  function onSubmit(values: Checkooutprops) {
    console.log(values);
  }

  const handleSuccessPage = () => {
    navigate("/success-page");
  };

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
                    {/* <FormLabel>Username</FormLabel> */}
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

          {/* <Link to="/success-page"> */}
          <Button
            onClick={handleSuccessPage}
            className="rounded-none mt-8"
            type="submit"
            disabled={!cashOnDelivery}
          >
            Confirm order
          </Button>
          {/* </Link> */}
        </form>
      </Form>
    </div>
  );
};
export default CheckoutPage;
