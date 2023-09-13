import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Forgotpassword from "../pages/Forgotpassword";
import Login from "../pages/Login";
import Resetpassword from "../pages/Resetpassword";
import Tearchers from "../pages/Tearchers";
import Students from "../pages/dashboard/Students";

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
        element: <Tearchers />,
      },

      {
        path: "student",
        element: <Students />,
      },
      {
        path: "tearchers",
        element: <Tearchers />,
      },
      {
        path: "parents",
        element: <Tearchers />,
      },
    ],
  },
]);
