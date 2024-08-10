import img1 from "../../img/magegee1.jpg";
import { Card, CardContent, CardTitle } from "../../components/ui/card";
import { Table, TableBody, TableRow } from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 py-5 bg-background">
      <Card
        x-chunk="dashboard-06-chunk-0"
        className=" bg-background rounded-none"
      >
        <CardContent className=" p-0">
          <Table>
            <TableBody>
              <TableRow className="flex justify-between items-center p-5">
                <div className="flex gap-5">
                  <img
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="100"
                    src={img1}
                    width="100"
                  />
                  <div>
                    <CardTitle className="md:text-xl text-lg">
                      Magegee Epomaker TH40 1
                    </CardTitle>
                    <p className="text-lg my-2">Quantity: 10</p>
                    <div className="flex gap-x-5 items-center">
                      <Button
                        variant="outline"
                        className="border-none p-0 hover:bg-transparent hover:text-text"
                      >
                        <Trash2 className="text-text" />
                      </Button>
                      <div className="flex gap-0.5 border md:hidden">
                        <Button
                          variant="outline"
                          className="px-1 h-8 rounded-none hover:bg-none bg-transparent hover:bg-transparent bg-[#e6e6e6] text-text  flex justify-center items-center"
                        >
                          <Minus className="text-text" />
                        </Button>
                        <Button className=" px-3 h-8 rounded-none  bg-primary text-white text-base flex justify-center items-center">
                          0
                        </Button>
                        <Button className=" px-1 h-8 rounded-none  bg-transparent hover:bg-transparent bg-[#e6e6e6]  text-text  flex justify-center items-center">
                          <Plus />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:block hidden">
                  <div className="flex gap-0.5 border">
                    <Button
                      variant="outline"
                      className="px-1 h-8 rounded-none hover:bg-none bg-transparent hover:bg-transparent bg-[#e6e6e6] text-text  flex justify-center items-center"
                    >
                      <Minus className="text-text" />
                    </Button>
                    <Button className=" px-3 h-8 rounded-none  bg-primary text-white text-base flex justify-center items-center">
                      0
                    </Button>
                    <Button className=" px-1 h-8 rounded-none  bg-transparent hover:bg-transparent bg-[#e6e6e6]  text-text  flex justify-center items-center">
                      <Plus />
                    </Button>
                  </div>
                </div>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartPage;
