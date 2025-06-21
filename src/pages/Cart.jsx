import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items || []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="border p-4 rounded-md flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 object-contain"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-pink-600 font-bold">${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;


