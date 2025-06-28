import ProductCard from './ProductCard';

function ProductGrid({ products, loading, searchQuery = "" }) {
  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return <p className="text-center text-red-500">No products found.</p>;
  }

  return (
    <div className="bg-[#F6F8ED] p-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}

export default ProductGrid;


