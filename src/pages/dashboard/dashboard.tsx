import { BadgeX, Cog, MoreHorizontal } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardTitle } from "../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { AddProductModal } from "./add-product-modal";

const Dashboard = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 py-5 bg-background">
      <Card className="flex justify-between items-center p-4 mb-5 bg-accent bg-opacity-15">
        <CardTitle className="text-text md:text-xl text-lg">
          Add a product
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
              <TableRow>
                <TableCell>
                  <div className="font-medium">Olivia Smith</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    olivia@example.com
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">Refund</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="outline">
                    Declined
                  </Badge>
                </TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="space-y-2 p-2">
                      <DropdownMenuItem className="flex gap-x-2 justify-center bg-primary cursor-pointer">
                        <span className="text-white">Edit</span>{" "}
                        <Cog className="text-white" />
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex gap-x-2 justify-center bg-primary cursor-pointer">
                        <span className="text-white">Delete</span>{" "}
                        <BadgeX className="text-white" />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
