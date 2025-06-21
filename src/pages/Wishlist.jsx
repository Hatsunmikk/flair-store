import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-md shadow-sm flex justify-between items-center"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 object-contain"
                />
                <span>{item.title}</span>
              </div>
              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
