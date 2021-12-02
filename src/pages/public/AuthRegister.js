import React from 'react'
import Register from '../../components/Register';
import { Link } from 'react-router-dom';

const Auth = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Register/>
        </div>
    )
}

export default Auth;