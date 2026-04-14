import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from './components/Navbar'
import AuthProvider from "./context/AuthProvider";
import ProductDetails from "./pages/ProductDetails";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="mainBg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
