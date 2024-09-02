import Confetti from "../../components/shared-components/animate-component/animate-component";
import { Card } from "../../components/ui/card";

const SuccessPage: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 py-5 bg-background">
      <Card className="h-[calc(100vh-200px)] flex justify-center items-center bg-background">
        <Confetti />
      </Card>
    </div>
  );
};

export default SuccessPage;
