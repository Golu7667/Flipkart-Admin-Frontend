import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Input from '../../components/UI/Input'
import { useDispatch, useSelector } from 'react-redux';
import {Routes,Route, useNavigate,Navigate} from 'react-router-dom'

function Signup() {
  const [first,setfirst]=useState('');
  const [last,setlast]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const auth=useSelector(state=>state.auth);
  // const nevigate=useNevigate();
  const dispatch=useDispatch();
  const navigate=useNavigate();

  if(auth.authenticate){
    return <Navigate to="/"/>
       
   }
 

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value={first}
                    type="text"
                    onChange={(e)=>{setfirst(e.target.value)}}
                  />
                </Col>
                <Col md={6}>
                <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value={last}
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
                    onChange={(e)=>{setpassword(e.target.password)}}
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

export default Signup