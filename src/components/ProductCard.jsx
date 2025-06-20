function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto mb-2" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-pink-600 font-bold">${product.price}</p>
    </div>
  )
}

export default ProductCard

