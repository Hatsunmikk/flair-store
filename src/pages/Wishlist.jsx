import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.items);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
    toast.info("Removed from wishlist");
  };

  const handleAddToCart = (item) => {
    const alreadyInCart = cart.some((cartItem) => cartItem.id === item.id);
    if (!alreadyInCart) {
      dispatch(addToCart(item));
      toast.success("Added to cart!");
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-[#2c2c2c]">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlist.map((item) => {
            const inCart = cart.some((cartItem) => cartItem.id === item.id);

            return (
              <div
                key={item.id}
                className="bg-[#EEF1DA] border border-[#C7D9DD] p-4 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-center gap-4"
              >
                <Link
                  to={`/product/${item.id}`}
                  className="flex items-center gap-4 hover:underline w-full sm:w-auto"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 object-contain"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-[#ADB2D4] font-bold text-lg">${item.price}</p>
                  </div>
                </Link>

                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`px-4 py-1 rounded font-medium ${
                      inCart ? "bg-gray-500 cursor-not-allowed" : "bg-[#ADB2D4]"
                    } text-white hover:opacity-90`}
                    disabled={inCart}
                  >
                    {inCart ? "Already in Cart" : "Add to Cart"}
                  </button>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="px-4 py-1 rounded font-medium bg-red-500 text-white hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Wishlist;



