import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import contactusimg from "../../img/contactusimg.jpg";

const Contactus = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 pt-2 pb-7 bg-background min-h-[calc(100vh-200px)]">
      <div className="relative">
        <img src={contactusimg} alt="" />
        <h3 className="absolute bg-black bg-opacity-50 inset-0 flex justify-center items-center lg:pt-5 md:pt-3 pt-1 lg:text-7xl md:text-5xl text-3xl font-bold text-white">
          Contact Us
        </h3>
      </div>

      <Card x-chunk="dashboard-07-chunk-0" className="rounded-none">
        <CardHeader>
          <CardTitle>Send us the query you want to know</CardTitle>
          <CardDescription>
            Just fill out the form below and click on the send button.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                className="w-full"
                placeholder="Enter your name"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name">Email</Label>
              <Input
                id="email"
                type="email"
                className="w-full"
                placeholder="Enter your Email"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Tell us what you want to know"
                className="min-h-32"
              />
            </div>
            <div>
              <Button>Send</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contactus;
