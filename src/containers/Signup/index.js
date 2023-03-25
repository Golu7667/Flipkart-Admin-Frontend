import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Input from '../../components/UI/Input'
import { useDispatch, useSelector } from 'react-redux';
import {Routes,Route, useNavigate,Navigate} from 'react-router-dom'
import {signup} from '../../actions/user.actions'


function Signup() {
  const [firstName,setfirst]=useState('');
  const [lastName,setlast]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const auth=useSelector(state=>state.auth);
  const User=useSelector(state=>state.user)
  // const nevigate=useNevigate();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  console.log(password)
 const userSignup=(e)=>{
  e.preventDefault();
    
      const user={
        firstName,lastName,email,password
      }
    
      dispatch(signup(user))
 }

  if(auth.authenticate){
    return <Navigate to="/"/>
       
   }
 
   if(User.loading){
    console.log("kkkkkk")
    return <p>Loading...</p>
   }

  return (
    <>
    <Layout/>
      <Container>
         {User.message}
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value={firstName}
                    type="text"
                    onChange={(e)=>{setfirst(e.target.value)}}
                  />
                </Col>
                <Col md={6}>
                <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value={lastName}
                    type="text"
                    onChange={(e)=>{setlast(e.target.value)}}
                  />
                </Col>
              </Row>
              <Input
                    label="Email"
                    placeholder="Email"
                    value={email}
                    type="email"
                    onChange={(e)=>{setemail(e.target.value)}}
                  />
               <Input
                    label="Password"
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={(e)=>{setpassword(e.target.value)}}
                  />
              

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
           
          </Col>
        </Row>

      </Container>
      </>

  )
}

export default Signup