import React ,{useEffect, useState}from 'react'
import './App.css';
import Layout from './components/Layout';
import Home from './containers/Home/index';
import Signin from './containers/Signin/index';
import Signup from './containers/Signup/index';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Privateroute from './components/HOC/Privateroute';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { getAllCategory, isUserLoggedIn ,getInitailData} from './actions';
import { history } from './components/HOC/helper';
import { useSelector ,useDispatch} from 'react-redux';
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';


function App() {
  const auth=useSelector((state)=> state.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  useEffect(()=>{
   
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
      
    }
    dispatch(getInitailData())
  },[]);

  history.navigate = useNavigate();
  history.location = useLocation();
  const token = window.localStorage.getItem('token');

 

  return (
    <>
      <Routes>
        <Route path="/" element={<Privateroute name={<Home />} />} />
        <Route path="/category" element={<Privateroute name={<Category/>} />} />
        <Route path="/products" element={<Privateroute name={<Products/>} />} />
        <Route path="/orders" element={<Privateroute name={<Orders/>}/>} />


        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>

  )

}

export default App;
