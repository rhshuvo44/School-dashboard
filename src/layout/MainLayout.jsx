import { Outlet } from "react-router-dom";
import SidebarLink from "../component/SidebarLink";
import Footer from "./Footer";
import Header from "./Header";
const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="drawer lg:drawer-open">
        <input
          id="sideBarDashboard"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col p-5 bg-[#F0F1F3]">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="sideBarDashboard" className="drawer-overlay"></label>
          <ul className="menu px-4 pb-24 pt-24 md:p-4 w-60 min-h-full bg-primary text-white">
            <SidebarLink />
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
