import React from 'react'
import { Route, Routes } from 'react-router';
import Auth from '../pages/public/Auth';
import Home from '../pages/public/Home';
import AuthRegister from '../pages/public/AuthRegister'

const Unauthrouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/Register" element={<AuthRegister/>}/>
        </Routes>
    )
}

export default Unauthrouter;

