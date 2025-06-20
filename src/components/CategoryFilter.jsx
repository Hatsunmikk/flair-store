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
    <div className="flex gap-4 flex-wrap justify-center my-6">
      <button
        onClick={() => onSelectCategory('all')}
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 capitalize"
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
