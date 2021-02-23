import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../actions/auth'

const Navbar = () => {

  const {userInfo}=useSelector(state=>state.userLogin)
  const dispatch=useDispatch();
  const logoutHandler=(e)=>{
    e.preventDefault();
    console.log("logout")
    dispatch(logout());
  }
 

  return (
    <div className='header'>
      <Link to='/material'>
        <li>Materials</li>
      </Link>

      <Link to='/alumini'>
        <li>Alumini</li>
      </Link>
      <Link to='/profile'>
        <li>ProfilePage</li>
      </Link>
      <Link>Hello</Link>
    {!userInfo ? <> <Link to='/signin'>
        <li>Signin</li>
      </Link> 
     <Link to='/signup'>
        <li>Signup</li>
      </Link> </> :<Link><li onClick={logoutHandler} >Logout</li></Link> }
    </div>
  )
}

export default Navbar
