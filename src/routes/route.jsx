import { createBrowserRouter } from "react-router-dom";

import Resetpassword from "../pages/Resetpassword";
import Forgotpassword from "../pages/Forgotpassword";
import MainLayout from "../layout/MainLayout";
import Students from "../pages/Students";
import Tearchers from "../pages/Tearchers";
import Login from "../pages/Login";

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
        path: "tearchers",
        element: <Tearchers />,
      },
      {
        path: "student",
        element: <Students />,
      },
    ],
  },
]);
