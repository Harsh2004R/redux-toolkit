import React from 'react'
import Private from './Routes/Private';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Private />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
