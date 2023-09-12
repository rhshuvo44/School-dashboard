import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Resetpassword from "../pages/Resetpassword";
import Forgotpassword from "../pages/Forgotpassword";
import MainLayout from "../layout/MainLayout";
import Students from "../pages/Students";
import Dashboard from "../pages/Dashboard.Jsx";

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
    path: "admin",
    element: <MainLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "student",
        element: <Students />,
      },
    ],
  },
]);
