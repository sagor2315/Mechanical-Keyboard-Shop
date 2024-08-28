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
import { Cog } from "lucide-react";

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
import { useGetAllProductsQuery } from "../../redux/features/allProductsApi";
import { productProps } from "../../components/reusable-components/ButtonReuseable";
import { useUpdateProductMutation } from "../../redux/features/updateProduct";
import Swal from "sweetalert2";

type ProductFormType = {
  image: string | undefined;
  title: string | undefined;
  rating: number | undefined;
  brand: string | undefined;
  stock: number | undefined;
  price: number | undefined;
  description: string | undefined;
};

export function EditProductModal({ _id }: { _id: string }) {
  const [updateProduct] = useUpdateProductMutation();
  const { data } = useGetAllProductsQuery({
    searchItem: "",
    minPrice: null,
    maxPrice: null,
    sortOrder: "",
  });
  const productsAll = data?.data as productProps["product"][];

  const updateSingleProduct = productsAll?.find((data) => data?._id === _id);

  const form = useForm({
    defaultValues: {
      image: updateSingleProduct?.image,
      title: updateSingleProduct?.title,
      rating: updateSingleProduct?.rating,
      brand: updateSingleProduct?.brand,
      stock: updateSingleProduct?.stock,
      price: updateSingleProduct?.price,
      description: updateSingleProduct?.description,
    },
  });

  async function onSubmit(data: ProductFormType) {
    try {
      const productInfo = { ...data, _id };
      const res = await updateProduct(productInfo).unwrap();
      const finalData = res?.data;

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Your ${finalData?.title} has been updated`,
        showConfirmButton: false,
        timer: 2500,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <Button variant="default" className="h-6">
          <Cog className="text-white" />
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
