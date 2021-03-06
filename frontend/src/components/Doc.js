import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import '../css/Doc.css'

const Doc = ({ material }) => {
  const [clicked, setClicked] = useState(false)

  const clickHandler = (e) => {
    e.preventDefault()
    setClicked(!clicked)
  }

  return (
    <>
      <Card className='my-3 p-3 rounded'>
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
      </Card>
      <a href={material.path}>
        <button>
          <i className='fas fa-download' />
          Download File
        </button>
      </a>
    </>
  )
}

export default Doc
