import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { addToWishlist, removeFromWishlist } from "../redux/wishlistSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);
  const wishlistItems = useSelector((state) => state.wishlist.items || []);

  const inCart = cartItems.some((item) => item.id === product.id);
  const inWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleCartClick = () => {
    if (inCart) {
      dispatch(removeFromCart(product.id));
      toast.info("Removed from cart");
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
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mx-auto mb-2"
        />
        <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
      </Link>
      <p className="text-pink-600 font-bold mb-4">${product.price}</p>

      <div className="flex gap-2 flex-col sm:flex-row">
        <button
          onClick={handleCartClick}
          className={`px-4 py-1 rounded ${
            inCart ? "bg-red-500" : "bg-pink-600"
          } text-white hover:opacity-90`}
        >
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </button>

        <button
          onClick={handleWishlistClick}
          className={`px-4 py-1 rounded ${
            inWishlist ? "bg-red-500" : "bg-gray-800"
          } text-white hover:opacity-90`}
        >
          {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;



