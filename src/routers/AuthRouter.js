import React from 'react'
import { Route, Routes } from 'react-router';
import Product from '../components/Product';
import Dashboard from '../pages/private/Dashboard';
import Micuenta from '../components/Micuenta';
import Carrito from '../components/Carrito';

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}>
                <Route index element={<Product />} />

                <Route path="micuenta" element={<Micuenta />} />
                <Route path="carrito" element={<Carrito />} />
            </Route>
        </Routes>
    )
}

export default AuthRouter;
