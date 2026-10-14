import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RootLayout from "../layouts/RootLayout";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Logout";
import Users from "../pages/admin/users/Users";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
  {
    path: "/user",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [{ index: true, element: <Users /> }],
      },
    ],
  },
]);

export default router;
