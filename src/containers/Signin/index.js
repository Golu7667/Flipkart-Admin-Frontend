import React,{useEffect, useState} from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Input from '../../components/UI/Input'
import {isUserLoggedIn, login} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import {Routes,Route, useNavigate,Navigate} from 'react-router-dom'
import Home from '../Home';
function Signin() {
   
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [error,seterror]=useState('');
  const auth=useSelector(state=>state.auth);
  // const nevigate=useNevigate();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  //  useEffect(()=>{
  //   if(!auth.authenticate){
  //     dispatch(isUserLoggedIn());
  //   }
   
  //     console.log("::::")
  // },[auth.authenticate]);
   
  // if(auth.authenticate){
    
  //   return <Navigate to="/"/>
       
  //  }
     const userLogin=(e)=>{
      e.preventDefault();
      const user={
        email,
        password
      }
      console.log(user);
      dispatch(login(user))
     }
   
  return (

    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
             <Form onSubmit={userLogin}> 
              <Input
                label="Email"
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => {setemail(e.target.value) }}
              />
              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => {setpassword(e.target.value)}}
              />


              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

      </Container>
    </Layout>

  )
}

export default Signin