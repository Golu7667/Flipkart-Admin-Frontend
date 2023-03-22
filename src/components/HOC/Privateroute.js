import React from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import Home from '../../containers/Home';
import Signin from '../../containers/Signin';
import { history } from './helper';
function Privateroute(props) {
     const navigate=useNavigate();
     const token = window.localStorage.getItem('token');
     console.log(history.navigate);
     console.log(history.location)
     if(!token){
          console.log(!token)
          return <Navigate to="/signin" state={{from:history.location}}/>
     }
    return props.name;


}

export default Privateroute;