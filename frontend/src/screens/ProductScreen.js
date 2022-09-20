import { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Rating from '../components/Rating'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return false
  }
}

const ProductScreen = () => {
  const params = useParams()
  const { slug } = params

  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  })
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get(`/api/products/slug/${slug}`)
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message })
      }
    }
    fetchData()
  }, [slug])

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img className="img-large" src={products.image} alt={products.name} />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>{products.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={products.rating}
                numReviews={products.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price : ${products.price}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}></Col>
      </Row>
    </div>
  )
}

export default ProductScreen
