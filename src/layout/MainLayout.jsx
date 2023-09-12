import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { AiFillCalculator, AiFillDashboard } from "react-icons/ai";
import { PiStudentBold } from "react-icons/pi";
import { GiClassicalKnowledge, GiTeacher } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { LuLibrary } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
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
          <ul className="menu px-4 pb-24 pt-24 md:p-4 w-full md:w-72 min-h-full bg-primary text-white">
            <li>
              <details open>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <AiFillDashboard className="text-white" />
                  Dashboard
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Students
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Teachers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Parents
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <PiStudentBold className="text-white" />
                  Students
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      All Students
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Student Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Admisson Form
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Student Promotion
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <GiTeacher className="text-white" />
                  Teachers
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      All Tearchers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Teacher Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Add Teacher
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Payment
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <FiUsers className="text-white" />
                  Parents
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      All Parents
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Parents Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Add Parents
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <LuLibrary className="text-white" />
                  Library
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      All Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Add new book
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <AiFillCalculator className="text-white" />
                  Accounts
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      All fees Collection
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Expenses
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Add Expenses
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <GiClassicalKnowledge className="text-white" />
                  Class
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      All Class
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Add New Class
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <MdLibraryBooks className="text-white" />
                  Subject
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      All Subject
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Add New subject
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <BsFillCalendarDateFill className="text-white" />
                  Class Routine
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Class Routine
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Add Class Routine
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Sidebar content here */}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
