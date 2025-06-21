import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/wishlistSlice";


function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto mb-2"
      />
      <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
      <p className="text-pink-600 font-bold mb-2">${product.price}</p>
      
      <div className="mt-auto flex gap-2">
        <button
          onClick={() => dispatch(addToCart(product))}
          className="flex-1 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Add to Cart
        </button>
        <button
          onClick={() => dispatch(addToWishlist(product))}
          className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Wishlist
        </button>
      </div>
    </div>
  );
}


export default ProductCard

