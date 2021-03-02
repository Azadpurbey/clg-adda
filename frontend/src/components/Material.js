import React, { useState } from 'react'
import '../css/Material.css'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from './FormContainer'
import axios from 'axios'
const Material = () => {

  const [filename,setFileName]=useState('');

  const uploadFileHandler=async(e)=>{
    console.log(e.target.files)
    const file=e.target.files[0];
    console.log("#####"+file.name);
    const formData=new FormData();
    formData.append('pdf',file)
    
    // setUploading(true)
    try {
       
       const config={
          headers:{
             'Content-Type':'multipart/form-data'
          }
       }

       const {data}=await axios.post('/api/upload',formData,config)
       console.log(data);
       setFileName(data);
      //  setImage(data);
      //  setUploading(false);

    } catch (error) {
       console.log('$$$',error);
      //  setUploading(false)
    }

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
            <Form.Control value={filename}  type='text' placeholder='pdf'></Form.Control>
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
