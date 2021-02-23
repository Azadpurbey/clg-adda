import React from 'react'
import { useHistory, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/auth'


const Header = () => {
  const history=useHistory();
  const {userInfo}=useSelector(state=>state.userLogin)
  const dispatch=useDispatch();
  const logoutHandler=(e)=>{
    e.preventDefault();
    // console.log("logout")
    dispatch(logout());
    history.push('/');
  }

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Navbar.Brand href='/'>College-Adda</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/material'>Material</Nav.Link>
            <Nav.Link href='/alumini'>Alumini</Nav.Link>
           {userInfo && <Nav.Link href='/profile'>{userInfo.user.name}</Nav.Link>}
         {!userInfo ?  <> <Nav.Link href='/signin'>SignIn</Nav.Link>
            <Nav.Link href='/signup'>SignUp</Nav.Link></> :<Nav.Link onClick={logoutHandler}>LogOut</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
