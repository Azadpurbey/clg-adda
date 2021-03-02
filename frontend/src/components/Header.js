import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/auth'

const Header = () => {
  const { userInfo } = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()
  const logoutHandler = (e) => {
    e.preventDefault()
    console.log('logout')
    dispatch(logout())
  }

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <LinkContainer to='/'>
          <Navbar.Brand>College-Adda</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/profContact'>
              <Nav.Link>Prof Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contacts'>
              <Nav.Link>Materials</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/alumini'>
              <Nav.Link>Alumini</Nav.Link>
            </LinkContainer>

            {userInfo && (
              <LinkContainer to='/profile'>
                <Nav.Link>{userInfo.user.name}</Nav.Link>
              </LinkContainer>
            )}
            {!userInfo ? (
              <>
                {' '}
                <LinkContainer to='/signin'>
                  <Nav.Link>SignIn</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/signup'>
                  <Nav.Link>SignUp</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <Nav.Link onClick={logoutHandler}>LogOut</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
