import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Layout/sidebar';
import { Container,Row,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../actions';

const Category=() =>{
    const dispatch=useDispatch();
    const category=useSelector(state=>state.category)
    useEffect(()=>{
      console.log("Kk")
       dispatch(getAllCategory())
    },[])
    const renderCategories=(categories)=>{
               let myCategories=[];
               for(let category of categories){
                myCategories.push(
                  <li>
                    {category.name}
                  </li>
                )
               }
               return myCategories
    }
  return (
   <>
     <Layout/>
     <Sidebar name="category"/>
     <Container style={{marginLeft:'250px' ,width:'auto'}}>
     
        <Row >
            <Col md={12}>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <h3>Category</h3>
                <button>Add</button>
              </div>
            </Col>
        </Row>
        <Row>
          <Col md={2}>
             <ul>
              {renderCategories(category.categories)}
             </ul>
          </Col>
        </Row>
        </Container>
     
      
   </>
  )
}

export default Category