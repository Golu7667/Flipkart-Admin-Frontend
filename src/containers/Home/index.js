import React from 'react';
import Layout from '../../components/Layout/index';
import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';
import './index.css'
const Home = (props) => {
    return (
        <>
            <Layout>
            <Container fluid>
            <Row>
                <Col md={2} className="sidebar">Side bar</Col>
                <Col md={10} style={{marginLeft:'auto'}}>Side bar</Col>
              </Row>
            </Container>
              
                {/* <div className="jumbotron m-3 text-center">
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>

                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    
                </div> */}
            </Layout>
        </>
    )
}

export default Home