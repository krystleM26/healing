import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js'
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">Healing Intentions</a>
        </header>
        <main>
          <Routes>
            <Route path="/products/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
