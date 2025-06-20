import { Link } from "react-router-dom"
import { FaShoppingCart, FaHeart } from "react-icons/fa"

function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-purple-600">FlairStore</Link>

      <nav className="flex items-center gap-6 text-lg">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <Link to="/wishlist" className="hover:text-purple-600 flex items-center gap-1">
          <FaHeart /> Wishlist
        </Link>
        <Link to="/cart" className="hover:text-purple-600 flex items-center gap-1">
          <FaShoppingCart /> Cart
        </Link>
      </nav>
    </header>
  )
}

export default Header
