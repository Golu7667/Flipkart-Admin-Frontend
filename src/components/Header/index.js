import React from 'react'
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
      {/* <Navbar bg="dark" fixed="top" expand="lg" variant='dark' style={{ zIndex: 1 }}>
        <Container fluid style={{display:'flex',textAlign: 'center', justifyContent:'center' }}>
           <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> 
          <Link to="/" className='navbar-brand'  >Admin Dashboard</Link> 
        
           <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            auth. authenticate?renderLoggedInLinks():renderNonLoggedInLinks()
          </Navbar.Collapse >
        </Container>
      </Navbar> */}
      {auth. authenticate?null:renderNonLoggedInLinks()}
    </>
  )
}

export default Header