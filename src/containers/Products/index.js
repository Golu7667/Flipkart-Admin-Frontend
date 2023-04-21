import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Layout/sidebar'
import { Container, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../actions/product.action';
import Model from '../../components/UI/Model';
import Table from 'react-bootstrap/Table';
import './style.css'
import {generatePublicUrl} from '../../urlConfig'
import {AiOutlineEye,AiOutlineEdit} from 'react-icons/ai'
import {RiDeleteBinLine}   from 'react-icons/ri'

function Products(props) {

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [descripation, setDescripation] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [productPictures, setProductPictures] = useState([]);
  const [productDetailModal, setProductDetailModal] = useState(true)
  const [productDetails, setProductDetails] = useState(null)
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()

  const category = useSelector(state => state.category)
  const product = useSelector(state => state.product)
  console.log(product.products.length)


  const handleClose = () => {

    const form = new FormData();
    form.append("name", name);
    form.append("quantity", quantity);
    form.append("price", price);
    form.append("description", descripation);
    form.append("category", categoryId)
    for (let pic of productPictures) {
      form.append("productPicture", pic)
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
  const handleProductPictures = (e) => {
    setProductPictures([
      ...productPictures,
      e.target.files[0]
    ])
  }
  const renderProducts = () => {
    return (
      <Table responsive="sm" style={{ marginLeft: '100px', marginTop: '50px',padding:'50px' }} >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
             <th>See</th>
             <th>Edit</th>
             <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {

            product.products.length > 0 ?
              product.products.map(p =>
                <tr onClick={() => showProductDetailsModal(p)} key={p._id}>
                  <td>1</td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>{p.quantity}</td>
                  {/* <td>{p.descripation}</td> */}
                  <td>{p.category.name}</td>
                  <td>{<AiOutlineEye/>}</td>
                  <td>{<AiOutlineEdit/>}</td>
                  <td>{<RiDeleteBinLine/>}</td>
                </tr>

              )
              : null}




        </tbody>
      </Table>
    )
  }
  const renderAddProductModel = () => {
    return (
      <Model show={show}
        handleClose={handleClose}
        modalTitle={'Add New Product'}
      >
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
          productPictures.length > 0 ?
            productPictures.map((pic, index) => <div key={index}>{pic.name}</div>) : null
        }
        <input type='file' name="productPictures" onChange={handleProductPictures} />
      </Model>

    )
  }
  const handleCloseProductDetailsModal = () => {
    setProductDetailModal(false)
  }
  const showProductDetailsModal = (product) => {

    setProductDetails(product)
    setProductDetailModal(true)
  }

  const renderProductDetailsModel = () => {

    if (productDetails === null) {
      return null
    }

    return (
      <Model
        show={productDetailModal}
        handleClose={handleCloseProductDetailsModal}
        modalTitle={'Product Details'}
        size="lg"
      >

        <Row>
          <Col md="6">
            <label className='key'>Name</label>
            <p className='value'>{productDetails.name}</p>
          </Col>
          <Col md="6">
            <label className='key'>Price</label>
            <p className='value'>{productDetails.price}</p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <label className='key'>Quantity</label>
            <p className='value'>{productDetails.quantity}</p>
          </Col>
          <Col md="6">
            <label className='key'>Category</label>
            <p className='value'>{productDetails.category.name}</p>
            
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <label className='key'>Descripation</label>
            <p className='value'>{productDetails.description}</p>
          </Col>
         

        </Row>
        <Row>
          <Col >
          <label className='key'>Product Pictures</label>
          < div style={{display:'flex'}}>
          {productDetails.productPictures.map(picture=>
             <div className='productImgContainer'>
              <img src={generatePublicUrl(picture.img)}/>
             </div>
            
            )}
          </div>
           
          </Col>

        </Row>
      </Model>
    )
  }

  return (<>
    <Layout />
   
    <Container >
    <Sidebar name="Products" />
       <Container style={{marginLeft:'10px'}}>
       <Row >
        <Col md={12}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Category</h3>
            <button onClick={handleShow}>Add</button>
          </div>
        </Col>
      </Row>
       </Container>
     
      <Container fluid style={{marginLeft:'10px'}}>
      <Row>
        <Col>
          {
            renderProducts()
          }
        </Col>
      </Row>
      </Container>
      
    </Container >
    {
      renderAddProductModel()
    }
    {renderProductDetailsModel()}


  </>


  )
}

export default Products