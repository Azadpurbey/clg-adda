import React from 'react'
import '../css/Material.css'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from './FormContainer'
const Material = () => {
  const uploadFileHandler = () => {
    console.log('upload file handler')
  }
  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        GO BACK
      </Link>
      <FormContainer>
        <Form>
          <Form.Group controlId='doc'>
            <Form.Label>DOC</Form.Label>
            <Form.File
              id='pdf-file'
              label='choose File'
              custom
              onChange={uploadFileHandler}></Form.File>
            {/* {uploading && <Loader />} */}
          </Form.Group>

          <Button type='submit' variant='primary'>
            UPDATE
          </Button>
        </Form>
      </FormContainer>

      <div className='material'>
        <div className='doc__box'>
          <h1 className='doc'>Doc1</h1>
          <div className='doc__info'>
            <p>Name</p>
            <p>Date of upload</p>
            <p>Ratting</p>
            <p>Download option</p>
            <p>Ratting of this doc</p>
          </div>
        </div>
        <div className='doc__box'>
          <h1 className='doc'>Doc2</h1>
          <div className='doc__info'>
            <p>Name</p>
            <p>Date of upload</p>
            <p>Ratting</p>
            <p>Download option</p>
            <p>Ratting of this doc</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Material
