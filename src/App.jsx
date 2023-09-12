import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/route";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
