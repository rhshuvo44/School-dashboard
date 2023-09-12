import { Link, Outlet } from "react-router-dom";
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
        <div className="drawer-content px-10 py-5 bg-[#F0F1F3]">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="sideBarDashboard" className="drawer-overlay"></label>
          <ul className="menu px-4 pt-24 md:p-4 w-full md:w-72 min-h-full bg-primary text-white">
            {/* Sidebar content here */}
            <li>
              <Link className="hover:bg-transparent" to="dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="student">Students</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
