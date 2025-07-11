import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("userEmail"));
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 100,
    });

    const handleLoginChange = () => {
      setIsLoggedIn(!!localStorage.getItem("userEmail"));
    };

    window.addEventListener("storage", handleLoginChange); // listen to login/logout changes
    return () => window.removeEventListener("storage", handleLoginChange);
  }, []);

  return (
    <>
      <Header onSearch={setSearchQuery} isLoggedIn={isLoggedIn} />
      <main className="pt-24 px-4">
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login onLogin={() => {
            setIsLoggedIn(true);
            navigate("/"); // redirect to home after login
          }} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
