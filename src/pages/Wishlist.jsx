import { useSelector } from "react-redux";

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist.items || []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <ul className="space-y-4">
          {wishlistItems.map((item) => (
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

export default Wishlist;


