import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import ProductGrid from "../components/ProductGrid"
import CategoryFilter from "../components/CategoryFilter"

function Home({ searchQuery = "" }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      setProducts(data)
      setLoading(false)
    }
    fetchProducts()
  }, [])

  const filteredProducts = products.filter((product) =>
    (selectedCategory === "all" || selectedCategory === "" || product.category === selectedCategory) &&
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="p-4">
      <Banner />
      <CategoryFilter onSelectCategory={setSelectedCategory} />
      <ProductGrid
        products={filteredProducts}
        loading={loading}
        searchQuery={searchQuery}
      />
    </main>
  )
}

export default Home




