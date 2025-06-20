function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <img src={product.image} alt={product.title} className="h-48 object-contain mb-4 mx-auto" />
      <h2 className="text-sm font-semibold">{product.title}</h2>
      <p className="text-green-600 font-bold text-lg mt-2">${product.price}</p>
      <button className="mt-4 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
