import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import { signout } from '../../actions';

function Header() {


     
    const auth =useSelector(state=> state.auth);
    const dispatch=useDispatch();
    const logout=()=>{
         dispatch(signout())
    }
    // useEffect(()=>{
   
    //  const a=async()=>{await auth}
     
    
    // },[]);
  



  const renderLoggedInLinks = () => {

    return (
      <Nav>
        <li className='nav-item'><span className='nav-link' onClick={logout}>Signout</span></li>

      </Nav>

    )
  }
  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        <li className='nav-item'><NavLink to='/signin' className='nav-link'>Signin</NavLink></li>
        <li className='nav-item'><NavLink to='/signup' className='nav-link'>Signup</NavLink></li>
      </Nav>

    )
  }
  return (
    <>
      <Navbar bg="dark" expand="lg" variant='dark' style={{ zIndex: 1 }}>
        <Container fluid>
          {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
          <Link to="/" className='navbar-brand'>Admin Dashboard</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
            </Nav>
            {auth. authenticate?renderLoggedInLinks():renderNonLoggedInLinks()}
          </Navbar.Collapse >
        </Container>
      </Navbar>
    </>
  )
}

export default Header