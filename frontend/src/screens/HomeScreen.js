import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true }
//     case 'FETCH_SUCCESS':
//       return { ...state, products: action.payload, loading: false }
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload }
//     default:
//       return false
//   }
// }

function HomeScreen() {
  // const [{ loading, error, products }, dispatch] = useReducer(reducer, {
  //   products: [],
  //   loading: true,
  //   error: '',
  // })
  const [products, setProducts] = useState([])
  const [show, setShow] = useState(false)
  console.log('products', products)

  useEffect(() => {
    const fetchData = async () => {
      // dispatch({ type: 'FETCH_REQUEST' })
      // try {
      const result = await axios.get('/api/products') // sends request to put data into the var
      //   dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      // } catch (err) {
      //   dispatch({ type: 'FETCH_FAIL', payload: err.message })
      // }

      setProducts(result.data)
    }
    fetchData() // call after defined
  }, [])

  const onClick = () => {
    setShow(!show)
  }

  return (
    <div>
      <h1>Featured products</h1>
      <button onClick={onClick}>
        {show ? 'hide products' : 'show products'}
      </button>

      <div className="products">
        {
          /* {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : ( */

          show &&
            products &&
            products.map((product, index) => (
              <div className="product" key={product.slug}>
                <Link to={`/products/${product.slug}`}>
                  <img src={product.images} alt={product.name} />
                </Link>
                <div className="product-info">
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                  <p> Stock:{product.countInStock}</p>
                  <button>Add To Cart</button>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default HomeScreen
