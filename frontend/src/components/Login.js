import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <h1>I am login page</h1>

            <Link to='/signUp'>
                <p1>signUp</p1>
            </Link>   
            
        </div>
    )
}

export default Login
