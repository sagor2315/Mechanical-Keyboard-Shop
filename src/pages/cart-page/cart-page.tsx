import img1 from "../../img/magegee1.jpg";
import { Card, CardContent } from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 py-5 bg-background min-h-[calc(100vh-200px)]">
      <Card
        x-chunk="dashboard-06-chunk-0"
        className=" bg-background rounded-none"
      >
        <CardContent className=" p-0">
          <Table>
            <TableBody>
              <TableRow className="flex justify-between items-center p-0.5">
                <TableCell className="flex gap-5">
                  <img
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="100"
                    src={img1}
                    width="100"
                  />
                  <ul>
                    <li className="md:text-xl text-lg font-semibold">
                      Magegee Epomaker TH40 1
                    </li>
                    <li className="text-lg my-2">Quantity: 10</li>

                    <li className="flex gap-x-5 items-center">
                      <Button
                        variant="outline"
                        className="border-none p-0 hover:bg-transparent hover:text-text"
                      >
                        <Trash2 className="text-text" />
                      </Button>
                      <a className="flex gap-0.5 border md:hidden">
                        <Button
                          variant="outline"
                          className="px-1 h-8 rounded-none hover:bg-none bg-transparent hover:bg-transparent bg-[#e6e6e6] text-text  flex justify-center items-center"
                        >
                          <Minus className="text-text" />
                        </Button>
                        <div className=" px-3 h-8 bg-primary text-white text-base flex justify-center items-center">
                          0
                        </div>
                        <Button className=" px-1 h-8 rounded-none  bg-transparent hover:bg-transparent bg-[#e6e6e6]  text-text  flex justify-center items-center">
                          <Plus />
                        </Button>
                      </a>
                    </li>
                  </ul>
                </TableCell>

                <TableCell className="md:block hidden">
                  <div className="flex gap-0.5 border">
                    <Button
                      variant="outline"
                      className="px-1 h-8 rounded-none hover:bg-none bg-transparent hover:bg-transparent bg-[#e6e6e6] text-text  flex justify-center items-center"
                    >
                      <Minus className="text-text" />
                    </Button>
                    <div className=" px-3 h-8 bg-primary text-white text-base flex justify-center items-center">
                      0
                    </div>
                    <Button className=" px-1 h-8 rounded-none  bg-transparent hover:bg-transparent bg-[#e6e6e6]  text-text  flex justify-center items-center">
                      <Plus />
                    </Button>
                  </div>
                </TableCell>
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
                Total Payable
              </TableCell>
              <TableCell className="text-lg font-medium">2050 TK.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      <div className="mt-5 flex justify-end">
        <Link to="/checkout">
          <Button className="rounded-none">Chekout Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
