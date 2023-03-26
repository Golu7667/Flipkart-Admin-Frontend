import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Layout/sidebar';
import { Container,Row,Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getAllCategory } from '../../actions';

function Category() {
    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(getAllCategory())
    },[])
  return (
   <>
     <Layout/>
     <Sidebar name="category"/>
      <Container>
        <Row>
            <Col md={12}>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <h3>Category</h3>
                <button>Add</button>
              </div>
            </Col>
        </Row>
      </Container>
   </>
  )
}

export default Category