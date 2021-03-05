import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import '../css/Doc.css'



const Doc = ({ material }) => {

  const [clicked,setClicked]=useState(false);

  const clickHandler=(e)=>{
    e.preventDefault();
    setClicked(!clicked)
    console.log(material.path);
  }
  
  
  return (
    <>
        
        <Card className='my-3 p-3 rounded' >
        <h6>By: {material.user && material.user.name}</h6>
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
