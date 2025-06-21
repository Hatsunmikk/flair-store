import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
} from "../redux/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const inCart = cartItems.some((item) => item.id === Number(id));
  const inWishlist = wishlistItems.some((item) => item.id === Number(id));

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center">Loading product...</p>;
  if (!product) return <p className="text-center text-red-500">Product not found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img src={product.image} alt={product.title} className="w-64 h-64 object-contain" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
          <p className="text-lg text-gray-700 mb-2">{product.description}</p>
          <p className="text-pink-600 font-bold text-xl mb-2">${product.price}</p>
          <p className="text-sm text-gray-500 capitalize">Category: {product.category}</p>
          <p className="text-sm text-gray-500">Rating: {product.rating?.rate} ⭐</p>

          <div className="mt-4 flex gap-3 flex-col sm:flex-row">
            <button
              onClick={() =>
                inCart
                  ? dispatch(removeFromCart(product.id))
                  : dispatch(addToCart(product))
              }
              className={`px-4 py-2 rounded ${
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
              className={`px-4 py-2 rounded ${
                inWishlist ? "bg-red-500" : "bg-gray-800"
              } text-white hover:opacity-90`}
            >
              {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

