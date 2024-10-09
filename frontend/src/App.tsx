import "./index.css";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import AuthProvider from "./context/Auth/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";
import CartProvider from "./context/Auth/Cart/CartProvider";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import MyOrdersPage from "./pages/MyOrdersPage";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-success" element={<OrderSuccessPage />} />
              <Route path="/My-orders" element={<MyOrdersPage />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
