import React, { useEffect , useState } from 'react'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Layout/sidebar';
import { Container,Row,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, getAllCategory } from '../../actions';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from '../../components/UI/Input';
import FormData from 'form-data';

const Category=() =>{
    const dispatch=useDispatch();
    const category=useSelector(state=>state.category)
    const [show, setShow] = useState(false);
    const [categoryName,setCategoryName]=useState('');
    const [prentCategoryId,setPrentCategoryId]=useState('')
    const [categoryImage,setCategoryImage]=useState('')
    useEffect(()=>{
      console.log("Kk")
       dispatch(getAllCategory())
    },[])
  
    const handleClose = () =>
    {
        const form =new FormData();
        form.append('name',categoryName);
        form.append('parentId',prentCategoryId);
        form.append('categoryImage',categoryImage);
        dispatch(addCategory(form))
        const cat={
           categoryName,
           prentCategoryId,
           categoryImage
        }
        console.log(cat)
      setShow(false);
    }
   
    const handleShow = () => setShow(true);
    const renderCategories=(categories)=>{
               let myCategories=[];
             
               for(let category of categories){
                myCategories.push(
                  <li>
                    {category.name}
                    {category.children.length>0?(<ul>{renderCategories(category.children)}</ul>):null}
                  </li>
                )
               }
               return myCategories
    }

    const createCategoryList=(categories,options=[])=>{

      for(let category of categories){
         options.push({value:category._id,name:category.name});
         if(category.children.length>0){
          createCategoryList(category.children,options)
         }
      }
     return options;

    }

    const handleCategoryImage=(e)=>{
       setCategoryImage(e.target.files[0])

          console.log(e.target.files[0])
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
                <button onClick={handleShow}>Add</button>
              </div>
            </Col>
        </Row>
        <Row>
          <Col md={2}>
             <ul>
              {renderCategories(category.categories)}
              {/* {JSON.stringify(createCategoryList(category.categories))} */}
             </ul>
          </Col>
        </Row>
        </Container>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Input
           value={categoryName}
           placehoder={"Category Name"}
           onChange={(e)=>setCategoryName(e.target.value)}
        />
        <select className='form-control' value={prentCategoryId} onChange={(e)=>setPrentCategoryId(e.target.value)}>
          <option>
            select category
          </option>
          {
            createCategoryList(category.categories).map(option=>
            <option key={option.value} value={option.value}>{option.name}</option>
            )
          }
        </select>
        <input type="file" name="categoryImage" onChange={e=>handleCategoryImage(e)}/>
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

export default Category