import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Layout/sidebar'
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../actions/product.action';

function Products(props) {

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [descripation, setDescripation] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [productPictures, setProductPictures] = useState([]);
  const [show, setShow] = useState(false);
   const dispatch=useDispatch()

const category=useSelector(state=>state.category)

  const handleClose = () => {
    
    // const form={
    //   name:name,
    //   quantity:quantity,
    //   price:price,
    //   descripation:descripation,
    //   category:categoryId,
    //   for(let pic of productPictures){

    //   }
    // }
   const form =new FormData();
   form.append("name",name);
   form.append("quantity",quantity);
   form.append("price",price);
   form.append("description",descripation);
   form.append("category",categoryId)
   for(let pic of productPictures){
    form.append("productPicture",pic)
   }
   dispatch(addProduct(form))
    setShow(false);
  }

  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {

    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }
    return options;

  }
  const handleProductPictures=(e)=>{
    setProductPictures([
      ...productPictures,
      e.target.files[0]
    ])
  }

  return (<>
    <Layout />
    <Sidebar name="Products" />
    <Container>
      <Row >
        <Col md={12}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Category</h3>
            <button onClick={handleShow}>Add</button>
          </div>
        </Col>
      </Row>
    </Container>


    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          label="Name"
          value={name}
          placehoder={"Product Name"}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Quantity"
          value={quantity}
          placehoder={"Quantity"}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Input
          label="Price"
          value={price}
          placehoder={"Price"}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          label="Descripation"
          value={descripation}
          placehoder={"Descripation"}
          onChange={(e) => setDescripation(e.target.value)}
        />
        
        <select className='form-control' value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
          <option>
            select category
          </option>
          {
            createCategoryList(category.categories).map(option =>
              <option key={option.value} value={option.value}>{option.name}</option>
            )
          }
        </select>
        {
          productPictures.length>0?
          productPictures.map((pic,index)=><div key={index}>{pic.name}</div>):null
        }
        <input type='file' name="productPictures" onChange={handleProductPictures}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>


  </>


  )
}

export default Products