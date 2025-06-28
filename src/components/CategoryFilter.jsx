import { useEffect, useState } from 'react'

function CategoryFilter({ onSelectCategory }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Error fetching categories:', err))
  }, [])

  return (
    <div className="py-12 bg-[#EEF1DA]">
      <h2 className="text-3xl font-bold text-center text-[#2b2d42] mb-8">
        Shop by Category
      </h2>
      <div className="flex gap-4 flex-wrap justify-center px-4">
        <button
          onClick={() => onSelectCategory('all')}
          className="bg-[#C7D9DD] text-[#2b2d42] font-semibold px-5 py-2 rounded hover:bg-[#ADB2D4] transition"
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className="bg-[#C7D9DD] text-[#2b2d42] font-semibold px-5 py-2 rounded hover:bg-[#ADB2D4] transition capitalize"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
