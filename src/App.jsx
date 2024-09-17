import { FloatButton } from "antd";
import Header from "./layout/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./layout/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Wishlist from "./pages/Wishlist/Wishlist";
import Profile from "./pages/UserProfile/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardAdd from "./pages/Dashboard/DashboardAdd/DashboardAdd";
import DashboardEdit from "./pages/Dashboard/DashboardEdit/DashboardEdit";
import Basket from "./pages/Cart/Basket";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./private-routes/route";
import Login from "./pages/UserProfile/Login/Login";
import Register from "./pages/UserProfile/Register/Register";
import Admin from "./pages/UserProfile/Admin/Admin";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Contact from "./pages/Contact/Contact";
import FaqPage from "./pages/Faq/FaqPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/addtocart" element={<Basket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          

          <Route element={<PrivateRoute requiredAdmin={false} />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route element={<PrivateRoute requiredAdmin={true} />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/addproduct" element={<DashboardAdd />} />
            <Route path="/dashboard/editproduct/:slug" element={<DashboardEdit />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </BrowserRouter>
      <FloatButton.BackTop />
    </div>
  );
};

export default App;
