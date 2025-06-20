import { FaShoppingCart, FaHeart, FaSearch, FaHome } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom"; // Don't forget this!

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="bg-white shadow-md p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        {/* Home Icon with Link */}
        <Link to="/" className="text-xl text-pink-600 hover:text-pink-800">
          <FaHome />
        </Link>
        <h1 className="text-xl font-bold text-pink-600">FlairStore</h1>
      </div>

      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center gap-2 w-full sm:w-auto"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="border px-3 py-1 rounded-md w-full sm:w-64"
        />
        <button type="submit" className="text-xl text-pink-600 hover:text-pink-800">
          <FaSearch />
        </button>
      </form>

      <div className="flex gap-4 text-xl">
        <Link to="/wishlist" className="hover:text-pink-500">
        <FaHeart className="hover:text-pink-500 cursor-pointer" />
        </Link>
        <Link to="/cart" className="hover:text-pink-500">
        <FaShoppingCart className="hover:text-pink-500 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
