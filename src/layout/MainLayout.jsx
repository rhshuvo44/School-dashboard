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
        <div className="drawer-content min-h-screen px-10 py-5 bg-[#F0F1F3]">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="sideBarDashboard" className="drawer-overlay"></label>
          <ul className="menu px-4 pb-24 pt-24 md:p-4 w-72 md:w-72 min-h-full bg-primary text-white">
            {/* <li>
              <details open>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <AiFillDashboard className="text-white" />
                  Dashboard
                </summary>
                <ul>
                  <li>
                    <Link className="hover:bg-transparen capitalize" to="admin">
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
                      to="tearcher"
                    >
                      Teachers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="parents"
                    >
                      Parents
                    </Link>
                  </li>
                </ul>
              </details>
            </li> */}
            <SidebarLink />
            {/* <li>
              <details>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <PiStudentBold className="text-white" />
                  Students
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="all-students"
                    >
                      All Students
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student-details"
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
            </li> */}
            {/* <li>
              <details>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <GiTeacher className="text-white" />
                  Teachers
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="all-teachers"
                    >
                      All Tearchers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="teacher-details"
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
            </li> */}
            {/* <li>
              <details>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <FiUsers className="text-white" />
                  Parents
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="all-parents"
                    >
                      All Parents
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="parents-details"
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
            </li> */}
            {/* <li>
              <details>
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
            </li> */}
            {/* <li>
              <details>
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
            </li> */}
            {/* <li>
              <details>
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
            </li> */}
            {/* <li>
              <details>
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
            </li> */}
            {/* <li>
              <details>
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
            </li> */}
            {/* <li>
              <details>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <AiOutlineOrderedList className="text-white" />
                  Attendence
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Student Attendence
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Student Attendence Sheet
                    </Link>
                  </li>
                </ul>
              </details>
            </li> */}
            {/* <li>
              <details>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <PiExamBold className="text-white" />
                  Exam
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Exam Schedule
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Exam Grades
                    </Link>
                  </li>
                </ul>
              </details>
            </li> */}
            {/* <li>
              <details>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <BsFillBusFrontFill className="text-white" />
                  Transport
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Add New Transport
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      All Transport Lists
                    </Link>
                  </li>
                </ul>
              </details>
            </li> */}
            {/* <li>
              <details>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <BsFillHouseAddFill className="text-white" />
                  Hostel
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Add New Room
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      All Room Lists
                    </Link>
                  </li>
                </ul>
              </details>
            </li> */}
            {/* <li>
              <details>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <AiFillNotification className="text-white" />
                  Notice
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Add New Notice
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      All Notice Lists
                    </Link>
                  </li>
                </ul>
              </details>
            </li> */}
            {/* <li>
              <details>
                <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                  <AiFillSetting className="text-white" />
                  Setting
                </summary>
                <ul>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      Add New User
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      All User
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to="student"
                    >
                      User Details
                    </Link>
                  </li>
                </ul>
              </details>
            </li> */}

            {/* Sidebar content here */}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
