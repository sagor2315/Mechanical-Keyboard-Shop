import { Card, CardTitle } from "../../components/ui/card";

const SuccessPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 py-5 bg-background">
      <Card className="h-[calc(100vh-200px)] flex justify-center items-center bg-background">
        <CardTitle className="bg-primary p-5 text-white">
          You Order is Successfull
        </CardTitle>
      </Card>
    </div>
  );
};

export default SuccessPage;
