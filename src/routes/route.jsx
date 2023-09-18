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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
        path: "tearcher",
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
    ],
  },
]);
