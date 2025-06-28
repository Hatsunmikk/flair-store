import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToWishlist, removeFromWishlist } from "../redux/wishlistSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// ⭐ Star Rating Component
function StarRating({ rating }) {
  const stars = Math.round(rating);
  return (
    <div className="flex text-yellow-500 text-sm mb-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < stars ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

function ProductCard({ product, index = 0 }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items || []);
  const wishlistItems = useSelector((state) => state.wishlist.items || []);

  const inCart = cartItems.some((item) => item.id === product.id);
  const inWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleCartClick = () => {
    if (inCart) {
      navigate("/cart");
    } else {
      dispatch(addToCart(product));
      toast.success("Added to cart!");
    }
  };

  const handleWishlistClick = () => {
    if (inWishlist) {
      dispatch(removeFromWishlist(product.id));
      toast.info("Removed from wishlist");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Added to wishlist!");
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-[#EEF1DA] border border-[#C7D9DD] rounded-xl p-4 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col justify-between relative"
    >
      {/* Wishlist Icon */}
      <div
        className="absolute top-3 right-3 text-[#ADB2D4] cursor-pointer"
        onClick={handleWishlistClick}
      >
        {inWishlist ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
      </div>

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mx-auto mb-3"
        />
        <h3 className="text-md font-semibold mb-1 text-gray-800">
          {product.title}
        </h3>
      </Link>

      <StarRating rating={product.rating?.rate || 0} />

      {/* Prices */}
      <div className="my-2">
        <p className="text-[#ADB2D4] font-bold text-lg">
          ${(product.price * 0.9).toFixed(2)}
        </p>
        <p className="text-gray-500 text-sm line-through">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Add to Cart / Go to Cart */}
      <button
        onClick={handleCartClick}
        className="px-4 py-1 rounded font-medium bg-[#ADB2D4] text-white hover:opacity-90"
      >
        {inCart ? "Go to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;





