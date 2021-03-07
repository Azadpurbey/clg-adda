import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import '../css/Doc.css'
import {useDispatch} from 'react-redux'
import {deleteMaterialAction} from '../actions/materialAction'


const Doc = ({ material,user }) => {


  

 
  const dispatch=useDispatch();
  const deleteHandler=(e)=>{
    e.preventDefault();
    if(window.confirm("Wanna Delete this PDF"))
    {
      dispatch(deleteMaterialAction(material._id));
    }
  }
  
  
  return (
    <>
        {/* {loading && <Loader/>} */}
        <Card className='my-3 p-3 rounded' >
        <h6>By: {material.user && material.user.name} {"  "} {(material.user && (material.user._id==user._id) || user.isAdmin===true) && <i onClick={deleteHandler} class="far fa-trash-alt fa-sm"></i>}</h6>
          <Card.Img src='/pdf.jpg' variant='top' />
          
          <Card.Body>
            <Card.Title as='div'>
              <strong>{material.title}</strong>
            </Card.Title>
            <Card.Title as='div'>
              <strong>{material.description}</strong>
            </Card.Title>

            <Card.Text as='div'>
              <Rating value={material.rating} />
            </Card.Text>
          </Card.Body>
          <a href={material.path}>
          <button>
              <i className="fas fa-download"/>
              Download File
          </button>
        </a>
        </Card>
    </>
  )
}

export default Doc
