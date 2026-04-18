import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import ProductCard from '../Components/ProductCard'
import Cart from "../Components/Cart"
function Public() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductCard />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default Public
