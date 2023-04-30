import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Layout/sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, getAllCategory } from '../../actions';
import Button from 'react-bootstrap/Button';

import Input from '../../components/UI/Input';
import FormData from 'form-data';
import Model from '../../components/UI/Model';
import { MDBCheckbox } from 'mdb-react-ui-kit';




const Category = () => {
  const dispatch = useDispatch();
  const category = useSelector(state => state.category)
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [prentCategoryId, setPrentCategoryId] = useState('')
  const [categoryImage, setCategoryImage] = useState('')


  const handleClose = () => {


    const cat = {
      name: categoryName,
      parentId: prentCategoryId,
      categoryImage: categoryImage
    }

    dispatch(addCategory(cat))
    setCategoryName('')
    setPrentCategoryId('')
    console.log(cat)
    setShow(false);
  }

  const handleShow = () => setShow(true);
  const renderCategories = (categories) => {
    let myCategories = [];

    for (let category of categories) {
      myCategories.push(
        < div class="col-sm-5" style={{ margin: '10px 0px 10px 0px', color: 'green' }}>
          <div class="card">
            <div class="card-body" >
              <h5 class="card-title" >

                <input type='checkbox' />


                {
                  category.name
                }

              </h5>

            </div>
          </div>
        </div >
      )
    }
    return myCategories
  }

  const createCategoryList = (categories, options = []) => {

    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }
    return options;

  }

  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0])

    console.log(e.target.files[0])
  }
  // console.log(category.categories[0].name)

  return (
    <>


      <div style={{ width: '100%', display: 'flex' }} >
        <div style={{ width: '15%' }}>
          <Sidebar />
        </div>
        <div style={{ width: '84%' }}>
          < div style={{ height: '60px', backgroundColor: 'yellow', width: 'auto', marginBottom: '10px' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

              <button onClick={handleShow} style={{ borderRadius: 5, fontSize: 20, marginTop: '10px' }}>Add</button>
              <button onClick={handleShow} style={{ borderRadius: 5, fontSize: 20, marginTop: '10px' }}>Edit</button>
              <button onClick={handleShow} style={{ borderRadius: 5, fontSize: 20, marginTop: '10px' }}>Delete</button>
              <button onClick={handleShow} style={{ borderRadius: 5, fontSize: 20, marginTop: '10px' }}>Update</button>
            </div>

          </div>


          <div >
            <div class="row" style={{ backgroundColor: '#ccc' }}>

              {renderCategories(category.categories)}
            </div>
          </div>
        </div >
      </div >
      <Model
        show={show}
        handleClose={handleClose}
        modalTitle={'Add New Category'}
      >
        <Input
          value={categoryName}
          placehoder={"Category Name"}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <select className='form-control' value={prentCategoryId} onChange={(e) => setPrentCategoryId(e.target.value)}>
          <option>
            select category
          </option>
          {
            createCategoryList(category.categories).map(option =>
              <option key={option.value} value={option.value}>{option.name}</option>
            )
          }
        </select>
        <input type="file" name="categoryImage" onChange={e => handleCategoryImage(e)} />
      </Model>

    </>
  )
}

export default Category
