import React, { Fragment, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/auth'
import { useHistory } from 'react-router-dom'
import '../../css/SigninSignup.css'
const Signin = () => {
  const [email, setEmail] = useState('seli@gmail.com')
  const [password, setPassword] = useState('12345')
  const dispatch = useDispatch()
  var history = useHistory()
  const { loading, userInfo, error } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (userInfo && userInfo.token) {
      history.push('/')
    }
  }, [history, userInfo])

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <div className='container'>
      {loading && <h3>Laoding.....</h3>}
      {error && <h3>{error}</h3>}
      <Fragment>
        <Link to='/' className='btn btn-dark'>
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
              minLength='5'
            />
          </div>
          <input type='submit' className='btn btn-primary' value='signin' />
        </form>
        <p className='my-1 '>
          Don't have an account?
          <Link to='/signup' className='text-primary'>
            Sign Up
          </Link>
        </p>
      </Fragment>
    </div>
  )
}
export default Signin
