import React, { Fragment, useEffect, useState } from 'react'
import { Link, Redirect, Route, useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { emailOtp, register } from '../../actions/auth'
import '../../css/SigninSignup.css'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
const SignupEmail = () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [branch, setBranch] = useState(null)
  const [admission, setAdmission] = useState(null)
  const [correctDetail, setCorrectDetail] = useState(false)
  const BranchList = [
    'MNC',
    'CSE',
    'ECE',
    'EE',
    'CHE',
    'MME',
    'CE',
    'PE',
    'CIV',
    'MECH',
    'EI',
  ]
  const history = useHistory()

  const dispatch = useDispatch()
  const { success: isEmail, loading: isEmailLoading, error } = useSelector(
    (state) => state.emailOtpUser
  )
  const {
    loading: loadingRegister,
    userRegister,
    error: errorRegister,
  } = useSelector((state) => state.userRegister)

  const OnSubmit = (e) => {
    e.preventDefault()
    // console.log({name,otp,email,password,branch,admission})
    if (password === password2 && admission !== null && branch != null) {
      dispatch(register({ name, otp, email, password, branch, admission }))
    } else {
      setCorrectDetail(true)
    }
  }
  const emailHandler = (e) => {
    e.preventDefault()
    dispatch(emailOtp(email))
  }
  //console.log(errorRegister)
  useEffect(() => {
    if (userRegister) {
      history.push('/')
    }
  }, [history, userRegister])

  return (
    <div className='container'>
      <Link to='/' className='btn btn-dark'>
        HomePage
      </Link>
      <Fragment>
        <h1 className='large text-primary'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Create Your Account
        </p>
        {(isEmailLoading || loadingRegister) && <Loader />}
        {error && <Message variant='danger'>{error}</Message>}
        {(errorRegister || correctDetail) && (
          <Message variant='danger'>Please check your detail properly</Message>
        )}

        {!isEmail && (
          <form className='form' onSubmit={emailHandler}>
            <p className='my-1'>Enter your email address</p>
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
            <input type='submit' className='btn btn-primary' value='Send OTP' />
          </form>
        )}

        {isEmail && !isEmailLoading && (
          <form className='form' onSubmit={OnSubmit}>
            <p className='my-1'>
              An OTP has been sent to your mail address.Check and Enter the OTP
            </p>
            <div className='form-group'>
              <input
                type='text'
                placeholder='OTP'
                name='otp'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Confirm Password'
                name='password2'
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
              <select
                name='branch'
                value={branch}
                required
                onChange={(e) => setBranch(e.target.value)}>
                <option>* Select Your branch</option>
                {BranchList.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>

            <div className='form-group'>
              <select
                name='admission'
                required
                value={admission}
                onChange={(e) => setAdmission(e.target.value)}>
                <option>* Select admission year</option>
                {[...Array(20).keys()].map((x) => (
                  <option key={2010 + x} value={2010 + x}>
                    {2010 + x}
                  </option>
                ))}
              </select>
            </div>
            <button type='submit' className='btn btn-primary'>
              Register
            </button>
          </form>
        )}
        <p className='my-1'>
          Already have an account? <Link to='/signin'>Sign In</Link>
        </p>
      </Fragment>
    </div>
  )
}

export default SignupEmail
