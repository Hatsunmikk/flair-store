import { FaShoppingCart, FaHeart, FaSearch, FaBell, FaHome } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="bg-[#D5E5D5] fixed top-0 left-0 w-full z-50 shadow-md px-6 py-3">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left: Logo and Home */}
        <div className="flex items-center gap-3">
          <Link to="/" className="text-2xl text-[#ADB2D4] hover:text-[#C7D9DD]">
            <FaHome />
          </Link>
          <h1 className="text-2xl font-bold text-[#ADB2D4] tracking-wide">
            FlairStore
          </h1>
        </div>

        {/* Center: Search */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center gap-2 w-full sm:w-1/2 max-w-lg"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="flex-1 px-3 py-2 border border-[#ADB2D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ADB2D4]"
          />
          <button
            type="submit"
            className="text-[#ADB2D4] text-xl hover:text-[#C7D9DD]"
          >
            <FaSearch />
          </button>
        </form>

        {/* Right: Icons */}
        <div className="flex items-center gap-5 text-xl text-[#ADB2D4]">
          <Link to="/wishlist" className="hover:text-[#C7D9DD]">
            <FaHeart />
          </Link>
          <Link to="/cart" className="hover:text-[#C7D9DD]">
            <FaShoppingCart />
          </Link>
          <button className="hover:text-[#C7D9DD]" title="Notifications">
            <FaBell />
          </button>
          <button className="text-sm font-medium border border-[#ADB2D4] px-3 py-1 rounded hover:bg-[#EEF1DA] hover:text-[#ADB2D4]">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

