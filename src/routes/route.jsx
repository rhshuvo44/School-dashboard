import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Forgotpassword from "../pages/Forgotpassword";
import Login from "../pages/Login";
import Resetpassword from "../pages/Resetpassword";
import Students from "../pages/dashboard/Students";
import Admin from "../pages/dashboard/Admin";
import Parents from "../pages/dashboard/Parents";
import Tearchers from "../pages/dashboard/Tearchers";
import StudentDetails from "../pages/student/StudentDetails";
import TeacherDetails from "../pages/teachers/TeacherDetails";
import ParentsDetails from "../pages/parents/ParentsDetails";
import AllParents from "../pages/parents/AllParents";
import AllStudents from "../pages/student/AllStudents";
import AllTeachers from "../pages/teachers/AllTeachers";
import AdmissionForm from "../pages/student/AdmissionForm";
import StudentPromotion from "../pages/student/StudentPromotion";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/reset-password",
    element: <Resetpassword />,
  },
  {
    path: "/forgot-password",
    element: <Forgotpassword />,
  },
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "student",
        element: <Students />,
      },
      {
        path: "teacher",
        element: <Tearchers />,
      },
      {
        path: "parents",
        element: <Parents />,
      },
      {
        path: "student-details",
        element: <StudentDetails />,
      },
      {
        path: "teacher-details",
        element: <TeacherDetails />,
      },
      {
        path: "parents-details",
        element: <ParentsDetails />,
      },
      {
        path: "all-parents",
        element: <AllParents />,
      },
      {
        path: "all-students",
        element: <AllStudents />,
      },
      {
        path: "all-teachers",
        element: <AllTeachers />,
      },
      {
        path: "student-promotion",
        element: <StudentPromotion />,
      },
      {
        path: "admission-form",
        element: <AdmissionForm />,
      },
    ],
  },
]);
