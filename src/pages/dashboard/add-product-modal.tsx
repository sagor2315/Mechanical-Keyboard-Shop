import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";

import { Textarea } from "../../components/ui/textarea";
import { Plus } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";

// import Swal from "sweetalert2";

type ProductPropsType = {
  image_link: string;
  product_name: string;
  rating: number;
  brand: string;
  quantity: number;
  price: number;
  description: string;
};

export function AddProductModal() {
  const form = useForm({
    defaultValues: {
      image_link: "",
      product_name: "",

      rating: 0,
      brand: "",
      quantity: 0,
      price: 0,

      description: "",
    },
  });

  function onSubmit(data: ProductPropsType) {
    console.log(data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <Button variant="default">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className=" overflow-y-scroll h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <DialogHeader>
          <DialogTitle>Add Your Educational Details</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
            <FormField
              control={form.control}
              name="image_link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Institution Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="product_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Institution Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Brand</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="brand" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write description about product"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogClose asChild>
              <Button type="submit">Submit</Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
