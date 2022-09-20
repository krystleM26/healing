import data from './data'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { compose, applyMiddleware } from 'redux'

const initialState = {}
const reducer = (state, action) => {
  return { products: data.products }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = configureStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
)

export default store
