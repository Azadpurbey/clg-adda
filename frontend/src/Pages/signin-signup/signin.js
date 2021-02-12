import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    console.log('signin')
  }
  return (
    <div className='container'>
      <Fragment>
        <Link to='/home' className='btn btn-dark'>
          HomePage
        </Link>
        <h1 className='large text-primary'>Sign In</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Sign Into Your Account
        </p>
        
        <form className='form' onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength='6'
            />
          </div>
          <input type='submit' className='btn btn-primary' value='signin' />
        </form>
        <p className='my-1 '>
          Don't have an account?
          <Link to='/signup-email' className='text-primary'>
            Sign Up
          </Link>
        </p>
      </Fragment>
    </div>
  )
}
export default Signin