import React from 'react'
import { useHistory, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/auth'

const Header = () => {
  const history = useHistory()
  const { userInfo } = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()
  const logoutHandler = (e) => {
    e.preventDefault()
    // console.log("logout")
    dispatch(logout())
    history.push('/')
  }

  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <LinkContainer to='/'>
        <Navbar.Brand>College-Adda</Navbar.Brand>
      </LinkContainer>
      {/* <div className='ml-right'> */}
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <LinkContainer to='/profDetail/MNC'>
            <Nav.Link>Faculty</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/material'>
            <Nav.Link>Materials</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/alumini/MNC'>
            <Nav.Link>Alumini</Nav.Link>
          </LinkContainer>
          {userInfo && userInfo.user.isAdmin && (
            <NavDropdown title='Admin' id='adminmenu'>
              <LinkContainer to='/admin/addProf'>
                <NavDropdown.Item>Add Prof Details</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/admin/addAlumini'>
                <NavDropdown.Item>Add Alumini Details</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          )}
          {userInfo ? (
            <NavDropdown title={userInfo.user.name} id='username'>
              <LinkContainer to='/profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <LinkContainer to='/signin'>
                <Nav.Link>
                  <i className='fas fa-user' /> Sign In
                </Nav.Link>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
      {/* </div> */}
    </Navbar>
  )
}

export default Header
