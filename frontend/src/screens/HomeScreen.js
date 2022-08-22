import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return false
  }
}

function HomeScreen() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products') // sends request to put data into the var
      setProducts(result.data)
    }
    fetchData() // call after defined
  }, [])
  return (
    <div>
      <h1>Featured products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/products/${product.slug}`}>
              <img src={product.images} alt={product.name} />
            </Link>
            <div className="product-info">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeScreen
