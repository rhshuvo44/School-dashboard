import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Resetpassword from "../pages/Resetpassword";
import Forgotpassword from "../pages/Forgotpassword";

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
]);
