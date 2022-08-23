import React, { useState } from 'react'

function Subscribe() {
  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow(!show)
  }

  return (
    <div>
      <div>
        <h1>Like What You See?</h1>
        <p>Subscribe today, to get 10% off your order!</p>
        <button onClick={toggle}>Subscribe Today</button>
      </div>
      {show && (
        <div style={{ width: '100vw', height: '100vh', background: 'red' }}>
          <form>
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Name" />
          </form>
        </div>
      )}
    </div>
  )
}

export default Subscribe
