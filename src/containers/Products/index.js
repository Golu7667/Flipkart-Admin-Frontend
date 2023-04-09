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
const product=useSelector(state=>state.product)
console.log(product.products.length)


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
   const renderProducts=()=>{
     return (
      <Table responsive="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Descripation</th>
          <th>Category</th>
          
        </tr>
      </thead>
      <tbody>
       {    
       
       product.products.length>0 ?
        product.products.map(p=>
          <tr key={p._id}>
          <td>1</td>
          <td>{p.name}</td>
          <td>{p.price}</td>
          <td>{p.quantity}</td>
          <td>{p.descripation}</td>
          <td></td>
         
        </tr>

        )
        :null }
      
         
      
          <td>1</td>
          <td>kk</td>
          <td>5000</td>
          <td>ppp</td>
          <td>uuu</td>
          <td></td>
      </tbody>
    </Table>
     )
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
      <Row>
        <Col>
           {
            renderProducts()
           }
        </Col>
      </Row>
    </Container>


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
          productPictures.length>0?
          productPictures.map((pic,index)=><div key={index}>{pic.name}</div>):null
        }
        <input type='file' name="productPictures" onChange={handleProductPictures}/>
   </Model>

  </>


  )
}

export default Products