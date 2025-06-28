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
    <div className="p-6 max-w-5xl mx-auto bg-[#F6F8ED] rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold mb-6 text-[#2c2c2c]">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-center border border-[#C7D9DD] bg-white rounded-lg shadow p-4"
            >
              <Link
                to={`/product/${item.id}`}
                className="flex items-center gap-4 w-full sm:w-1/2 hover:underline"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-contain rounded"
                />
                <div>
                  <h3 className="font-semibold text-[#2c2c2c]">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    ${item.price.toFixed(2)} each
                  </p>
                  <p className="text-sm text-gray-600">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-3 mt-4 sm:mt-0">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="bg-[#D5E5D5] text-[#2c2c2c] px-3 py-1 rounded hover:bg-[#C7D9DD]"
                >
                  −
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="bg-[#D5E5D5] text-[#2c2c2c] px-3 py-1 rounded hover:bg-[#C7D9DD]"
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

          <div className="text-right mt-8">
            <h4 className="text-xl font-semibold text-[#2c2c2c]">
              Total: ${totalPrice.toFixed(2)}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

