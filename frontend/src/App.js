import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Subscribe from './modals/Subscribe'
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Healing Intentions</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/products/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
            {/* <Route path="/subscribe" element={<Subscribe />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
