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
import { useCreateNewProductMutation } from "../../redux/features/createProduct";

type ProductPropsType = {
  image: string;
  title: string;
  rating: number;
  brand: string;
  stock: number /*here stock is assigned insted of available quantity */;
  price: number;
  description: string;
};

export function AddProductModal() {
  const [createNewProduct] = useCreateNewProductMutation();

  const form = useForm({
    defaultValues: {
      image: "",
      title: "",
      rating: 0,
      brand: "",
      stock: 0,
      price: 0,
      description: "",
    },
  });

  async function onSubmit(data: ProductPropsType) {
    try {
      const productInfo = {
        ...data,
        rating: Number(data.rating),
        price: Number(data.price),
        stock: Number(data.stock),
      };
      const res = await createNewProduct(productInfo);
      const finalData = res?.data;
      console.log("The post new Product", finalData);
    } catch (error) {
      console.log(error);
    }

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
              name="image"
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
              name="title"
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
              name="stock"
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
