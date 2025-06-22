import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.info("Removed from cart");
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-md shadow-sm flex flex-col sm:flex-row justify-between items-center"
            >
              <Link
                to={`/product/${item.id}`}
                className="flex gap-4 items-center hover:underline"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 object-contain"
                />
                <div>
                  <span className="block font-semibold">{item.title}</span>
                  <span className="text-sm text-gray-600">${item.price.toFixed(2)} each</span>
                  <p className="text-sm">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </Link>

              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="bg-gray-200 px-2 rounded text-lg hover:bg-gray-300"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="bg-gray-200 px-2 rounded text-lg hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right font-semibold text-lg mt-6">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
