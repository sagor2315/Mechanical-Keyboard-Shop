import { Outlet } from "react-router-dom";
import Navabr from "../components/shared-components/header/navabr";

const MainLayout = () => {
  return (
    <div>
      <Navabr />
      <Outlet />
    </div>
  );
};

export default MainLayout;
