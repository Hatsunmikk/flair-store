import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../redux/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);
  const wishlistItems = useSelector((state) => state.wishlist.items || []);

  const inCart = cartItems.some((item) => item.id === product.id);
  const inWishlist = wishlistItems.some((item) => item.id === product.id);

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto mb-2"
      />
      <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
      <p className="text-pink-600 font-bold mb-4">${product.price}</p>

      <div className="flex gap-2 flex-col sm:flex-row">
        <button
          onClick={() =>
            inCart
              ? dispatch(removeFromCart(product.id))
              : dispatch(addToCart(product))
          }
          className={`px-4 py-1 rounded ${
            inCart ? "bg-red-500" : "bg-pink-600"
          } text-white hover:opacity-90`}
        >
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </button>

        <button
          onClick={() =>
            inWishlist
              ? dispatch(removeFromWishlist(product.id))
              : dispatch(addToWishlist(product))
          }
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


