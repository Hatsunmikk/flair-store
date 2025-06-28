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
import ProductCard from "../components/ProductCard";
import { toast } from "react-toastify";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

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

      // Fetch related products by category
      const allRes = await fetch("https://fakestoreapi.com/products");
      const allProducts = await allRes.json();
      const related = allProducts.filter(
        (p) => p.category === data.category && p.id !== data.id
      );
      setRelatedProducts(related);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading product...</p>;
  if (!product) return <p className="text-center text-red-500">Product not found.</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-[#D5E5D5] rounded-xl p-6 shadow-md flex flex-col md:flex-row gap-8 items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2 text-[#2c2c2c]">{product.title}</h2>
          <p className="text-md text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-[#ADB2D4] mb-2">${product.price}</p>
          <p className="text-sm text-gray-600 mb-1">Category: <span className="capitalize">{product.category}</span></p>
          <p className="text-sm text-gray-600">Rating: {product.rating?.rate} ⭐</p>

          <div className="mt-6 flex gap-3 flex-col sm:flex-row">
            <button
              onClick={() => {
                if (inCart) {
                  dispatch(removeFromCart(product.id));
                  toast.info("Removed from cart");
                } else {
                  dispatch(addToCart(product));
                  toast.success("Added to cart!");
                }
              }}
              className={`px-4 py-2 rounded font-medium ${
                inCart ? "bg-red-500" : "bg-[#ADB2D4]"
              } text-white hover:opacity-90`}
            >
              {inCart ? "Remove from Cart" : "Add to Cart"}
            </button>

            <button
              onClick={() => {
                if (inWishlist) {
                  dispatch(removeFromWishlist(product.id));
                  toast.info("Removed from wishlist");
                } else {
                  dispatch(addToWishlist(product));
                  toast.success("Added to wishlist!");
                }
              }}
              className={`px-4 py-2 rounded font-medium ${
                inWishlist ? "bg-red-500" : "bg-[#C7D9DD]"
              } text-white hover:opacity-90`}
            >
              {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-center text-[#2c2c2c]">You Might Also Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;

