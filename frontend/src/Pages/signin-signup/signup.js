import React, { Fragment, useEffect, useState } from 'react'
import { Link, Redirect, Route,useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {emailOtp,register} from '../../actions/auth'

const SignupEmail = () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [branch, setBranch] = useState(null)
  const [admission, setAdmission] = useState(null)
  const [correctPassword,setCorrectPassword]=useState(false);
  // const [isEmail, setIsEmail] = useState('')
  const history=useHistory();

  const dispatch=useDispatch();
  const {success:isEmail,loading:isEmailLoading,error:errorOtp}=useSelector(state=>state.emailOtpUser)
  const {loading:loadingRegister,userRegister,errorRegister}=useSelector(state=>state.userRegister);

  const OnSubmit = (e) => {
    e.preventDefault()
    // console.log({name,otp,email,password,branch,admission})
    if(password===password2)
    {
      dispatch(register({name,otp,email,password,branch,admission}));
    }
    else{
          setCorrectPassword(true);
    }
  }
  const emailHandler = (e) => {
      e.preventDefault()
      dispatch(emailOtp(email));
  }

  useEffect(()=>{
     if(userRegister)
     {
       history.push('/');
     }
  },[history,userRegister])

  return (
    <div className='container'>
      <Link to='/home' className='btn btn-dark'>
        HomePage
      </Link>
      <Fragment>
        <h1 className='large text-primary'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Create Your Account
        </p>
        {(isEmailLoading || loadingRegister) && <h3>Loading......</h3> }
        {errorOtp && <h3>{errorOtp}</h3>}
        {errorRegister && <h3>{errorRegister}</h3>}
        {correctPassword && <h3>Please enter correct password</h3>}

        {!isEmail   && 
            <form className='form' onSubmit={emailHandler}>
              <p className='my-1'>Enter your email address</p>
              <div className='form-group'>
                <input
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input type='submit' className='btn btn-primary' value='Send OTP' />
              
              </form>
          }

      {isEmail&& !isEmailLoading && <form className='form' onSubmit={OnSubmit}>
              <p className='my-1'>
                An OTP has been sent to your mail address.Check and Enter the
                OTP
              </p>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='OTP'
                  name='otp'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Confirm Password'
                  name='password2'
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <select
                  name='branch'
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <option>* Select Your branch</option>
                  <option value='M&C'>M&C</option>
                  <option value='CSE'>CSE</option>
                  <option value='ECE'>ECE</option>
                  <option value='Mechanical'>Mechanical</option>
                  <option value='Chemical'>Chemical</option>
                  <option value='Electrical'>Electrical</option>
                </select>
              </div>

              <div className='form-group'>
                <select
                  name='admission'
                  value={admission}
                  onChange={(e) => setAdmission(e.target.value)}
                >
                  <option>* Select admission year</option>
                  <option value='2000'>2000</option>
                  <option value='2001'>2001</option>
                  <option value='2002'>2002</option>
                  <option value='2003'>2003</option>
                  <option value='2004'>2004</option>
                </select>
              </div>
              <button
                type='submit'
                className='btn btn-primary'
                >
                Register
              </button>
         
        </form>
        }
        <p className='my-1'>
          Already have an account? <Link to='/signin'>Sign In</Link>
        </p>
      </Fragment>
    </div>
  )
}

export default SignupEmail