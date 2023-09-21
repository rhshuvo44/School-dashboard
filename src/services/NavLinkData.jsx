import {
    AiFillCalculator,
    AiFillDashboard,
    AiFillNotification,
    AiFillSetting,
    AiOutlineOrderedList,
} from "react-icons/ai";
import {
    BsFillBusFrontFill,
    BsFillCalendarDateFill,
    BsFillHouseAddFill,
} from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { GiClassicalKnowledge, GiTeacher } from "react-icons/gi";
import { LuLibrary } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { PiExamBold, PiStudentBold } from "react-icons/pi";
export const navLink = [
  {
    id: 1,
    navTitle: "Dashboard",
    icon: <AiFillDashboard className="text-white" />,
    links: [
      {
        path: "admin",
        title: "Admin",
      },
      {
        path: "student",
        title: "Students",
      },
      {
        path: "teacher",
        title: "Teachers",
      },
      {
        path: "parents",
        title: "Parents",
      },
    ],
  },
  {
    id: 2,
    navTitle: "Students",
    icon: <PiStudentBold className="text-white" />,
    links: [
      {
        path: "all-students",
        title: "All Students",
      },
      {
        path: "student-details",
        title: "Student Details",
      },
      {
        path: "admisson-form",
        title: "Admisson Form",
      },
      {
        path: "student-promotion",
        title: "Student Promotion",
      },
    ],
  },
  {
    id: 3,
    navTitle: "Teachers",
    icon: <GiTeacher className="text-white" />,
    links: [
      {
        path: "all-teachers",
        title: "All Tearchers",
      },
      {
        path: "teacher-details",
        title: "Teacher Details",
      },
      {
        path: "add-teacher",
        title: "Add Teacher",
      },
      {
        path: "payment",
        title: "Payment",
      },
    ],
  },
  {
    id: 4,
    navTitle: " Parents",
    icon: <FiUsers className="text-white" />,
    links: [
      {
        path: "all-parents",
        title: "All Parents",
      },
      {
        path: "parents-details",
        title: "Parents Details",
      },
      {
        path: "add-parents",
        title: "Add Parents",
      },
    ],
  },
  {
    id: 5,
    navTitle: " Library",
    icon: <LuLibrary className="text-white" />,
    links: [
      {
        path: "all-books",
        title: "All Books",
      },
      {
        path: "add-new-book",
        title: "Add new book",
      },
    ],
  },
  {
    id: 6,
    navTitle: " Accounts",
    icon: <AiFillCalculator className="text-white" />,
    links: [
      {
        path: "all-fees-collection",
        title: "All fees Collection",
      },
      {
        path: "expenses",
        title: "Expenses",
      },
      {
        path: "add-new-expenses",
        title: "Add new Expenses",
      },
    ],
  },
  {
    id: 7,
    navTitle: " Class",
    icon: <GiClassicalKnowledge className="text-white" />,
    links: [
      {
        path: "all-class",
        title: "All Class",
      },

      {
        path: "add-new-class",
        title: "Add new Class",
      },
    ],
  },
  {
    id: 8,
    navTitle: " Subject",
    icon: <MdLibraryBooks className="text-white" />,
    links: [
      {
        path: "all-subject",
        title: "All Subject",
      },
      {
        path: "add-new-subject",
        title: "Add new Subject",
      },
    ],
  },
  {
    id: 9,
    navTitle: " Class Routine",
    icon: <BsFillCalendarDateFill className="text-white" />,
    links: [
      {
        path: "class-routine",
        title: "Class Routine",
      },
      {
        path: "add-class-routine",
        title: "Add Class Routine",
      },
    ],
  },
  {
    id: 10,
    navTitle: " Attendence",
    icon: <AiOutlineOrderedList className="text-white" />,
    links: [
      {
        path: "Student-attendence",
        title: "Student Attendence",
      },
      {
        path: "student-grades",
        title: "Student Grades",
      },
    ],
  },
  {
    id: 11,
    navTitle: " Exam",
    icon: <PiExamBold className="text-white" />,
    links: [
      {
        path: "exam-schedule",
        title: "Exam Schedule",
      },
      {
        path: "exam-grades",
        title: "Exam Grades",
      },
    ],
  },
  {
    id: 12,
    navTitle: " Transport",
    icon: <BsFillBusFrontFill className="text-white" />,
    links: [
      {
        path: "add-new-transport",
        title: "Add New Transport",
      },
      {
        path: "all-transport-list",
        title: "All Transport Lists",
      },
    ],
  },
  {
    id: 13,
    navTitle: " Hostel",
    icon: <BsFillHouseAddFill className="text-white" />,
    links: [
      {
        path: "add-new-room",
        title: "Add New Room",
      },
      {
        path: "all-room-list",
        title: "All Room Lists",
      },
    ],
  },
  {
    id: 14,
    navTitle: " Notice",
    icon: <AiFillNotification className="text-white" />,
    links: [
      {
        path: "add-new-notice",
        title: "Add New Notice",
      },
      {
        path: "all-notice-list",
        title: "All Notice Lists",
      },
    ],
  },
  {
    id: 15,
    navTitle: " Setting",
    icon: <AiFillSetting className="text-white" />,
    links: [
      {
        path: "add-new-user",
        title: "Add New User",
      },
      {
        path: "all-users",
        title: " All Users",
      },
      {
        path: "user-details",
        title: " User Details",
      },
    ],
  },
];
