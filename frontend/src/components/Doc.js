import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import '../css/Doc.css'

const Doc = ({ material }) => {
  return (
    <Card className='doc__box'>
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
  )
}

export default Doc
