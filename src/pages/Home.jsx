import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import ProductGrid from "../components/ProductGrid"

function Home({ searchQuery = "" }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      setProducts(data)
      setLoading(false)
    }
    fetchProducts()
  }, [])

  return (
    <main className="p-4">
      <Banner />
      <ProductGrid
        products={products}
        loading={loading}
        searchQuery={searchQuery}
      />
    </main>
  )
}

export default Home



