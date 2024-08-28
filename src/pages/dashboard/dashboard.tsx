import { BadgeX } from "lucide-react";
// import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardTitle } from "../../components/ui/card";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "../../components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { AddProductModal } from "./add-product-modal";
import { useGetAllProductsQuery } from "../../redux/features/allProductsApi";
import { productProps } from "../../components/reusable-components/ButtonReuseable";
import { EditProductModal } from "./edit-product-modal";
import { useDelteProductMutation } from "../../redux/features/deleteProduct";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { data } = useGetAllProductsQuery({
    searchItem: "",
    minPrice: null,
    maxPrice: null,
    sortOrder: "",
  });
  const productsAll = data?.data as productProps["product"][];
  // console.log(productsAll);
  const [delteProduct] = useDelteProductMutation();

  const handleDeleteProduct = (data: productProps["product"]) => {
    const productId = data?._id;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        delteProduct(productId);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 py-5 bg-background">
      <Card className="flex justify-between items-center p-4 mb-5 bg-accent bg-opacity-15">
        <CardTitle className="text-text md:text-xl text-lg">
          Add a Product
        </CardTitle>

        <AddProductModal />
      </Card>

      <Card x-chunk="dashboard-05-chunk-3" className="bg-background">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product name</TableHead>
                <TableHead className="hidden sm:table-cell">Price</TableHead>
                <TableHead className="hidden sm:table-cell">Brand</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productsAll?.map((data) => (
                <TableRow key={data?._id}>
                  <TableCell>
                    <div className=" text-sm text-muted-foreground md:inline">
                      {data?.title}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    ${data?.price}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {/* <Badge className="text-xs" variant="outline"> */}
                    {data?.brand}
                    {/* </Badge> */}
                  </TableCell>

                  <TableCell className="text-right">
                    {/* <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button
                          // aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="space-y-2 p-2">
                        <DropdownMenuItem className="flex justify-center bg-primary cursor-pointer">
                          <EditProductModal />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-x-2 justify-center bg-primary cursor-pointer">
                          <span className="text-white">Delete</span>{" "}
                          <BadgeX className="text-white" />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu> */}
                    <div className="flex gap-x-2 justify-end border">
                      <div>
                        <EditProductModal _id={data?._id} />
                      </div>
                      <div>
                        <Button
                          onClick={() => handleDeleteProduct(data)}
                          className="h-6"
                        >
                          <BadgeX className="text-white" />
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
