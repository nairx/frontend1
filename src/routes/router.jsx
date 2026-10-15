import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RootLayout from "../layouts/RootLayout";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Logout";
import Users from "../pages/admin/users/Users";
import Register from "../pages/Register";
import AddUser from "../pages/admin/users/AddUser"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  {path:"/register", element: <Register/>},

  { path: "/logout", element: <Logout /> },

  {
    path: "admin",
    element: <AdminLayout />,
    children: [{ index: true, element: <Users /> },
      {path:"add-user",element:<AddUser/>}
    ],
  },

  {
    path: "/user",
    element: <RootLayout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);

export default router;
