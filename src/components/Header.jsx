import { FaShoppingCart, FaHeart, FaSearch, FaBell, FaHome } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setShowSearch(false);
  };

  return (
    <header className="bg-[#D5E5D5] fixed top-0 left-0 w-full z-50 shadow-md px-6 py-3">
      <div className="relative flex flex-col sm:flex-row justify-between items-center gap-4">
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
        <div className="relative flex items-center justify-center flex-1">
          {!showSearch ? (
            <button
              onClick={() => setShowSearch(true)}
              className="text-[#ADB2D4] text-2xl hover:text-[#C7D9DD] transition-transform duration-300"
              title="Search"
            >
              <FaSearch />
            </button>
          ) : (
            <form
              onSubmit={handleSearchSubmit}
              className="flex w-full max-w-md gap-2 animate-fade-in-down"
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full px-3 py-2 border border-[#ADB2D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ADB2D4]"
              />
              <button
                type="submit"
                className="px-3 py-2 text-sm bg-[#ADB2D4] text-white rounded-md hover:bg-[#C7D9DD]"
              >
                Search
              </button>
            </form>
          )}
        </div>

        {/* Right: Icons and Login */}
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

