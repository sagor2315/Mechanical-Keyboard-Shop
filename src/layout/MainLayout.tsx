import { Outlet } from "react-router-dom";
import Navabr from "../components/shared-components/header/navabr";
import Footer from "../components/shared-components/footer/footer";

const MainLayout = () => {
  return (
    <div>
      <Navabr />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
