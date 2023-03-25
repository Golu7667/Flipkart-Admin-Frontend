import React from 'react';
import Layout from '../../components/Layout/index';
import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './index.css'
import Sidebar from '../../components/Layout/sidebar';
const Home = (props) => {
    return (
        <>
            <Layout />
            {/* <Container fluid>
            <Row>
                <Col md={2} className="sidebar">
                    <ul>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/products'}>Products</NavLink></li>
                        <li><NavLink to={'/orders'}>Orders</NavLink></li>
                    </ul>
                </Col>
                <Col md={10} style={{marginLeft:'auto'}}>Side bar</Col>
              </Row>
            </Container> */}
            <Sidebar name="Home"/>
              
                {/* <div className="jumbotron m-3 text-center">
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>

                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    
                </div> */}
           
        </>
    )
}

export default Home