import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import Customers from "./components/customers/Customers";
import Items from "./components/items/Items";
import Stock from "./components/stock/Stock";
import Suppliers from "./components/suppliers/Suppliers";
import Office from "./components/office/Office";
import Employee from "./components/employee/Employee";
import AddModifyStock from "./components/stock/AddModifyStock";
import PointOfSaleScreen from "./components/pos/Pos";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <PointOfSaleScreen />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/customers",
          element: <Customers />,
        },
        {
          path: "/items",
          element: <Items />,
        },
        {
          path: "/stock",
          element: <Stock />,
        },
        {
          path: "/suppliers",
          element: <Suppliers />,
        },
        {
          path: "/office",
          element: <Office />,
        },
        {
          path: "/office/employee",
          element: <Employee />,
        },
        {
          path:"/stock/add-modify-stock",
          element:<AddModifyStock/>
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
