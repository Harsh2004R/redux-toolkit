import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Cart from '../Pages/Cart'

function Private() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default Private
