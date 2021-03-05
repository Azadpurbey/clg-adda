import React, { useEffect, useState } from 'react'
import ReactS3 from 'react-s3'
import { useDispatch, useSelector } from 'react-redux'
import '../../css/Material.css'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import axios from 'axios'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { MATERIAL_CREATE_RESET } from '../../constants/materialConstants'
import {
  listMaterialDetails,
  CreateMaterial,
  createMaterial,
} from '../../actions/materialAction'

const Upload = ({ history }) => {
  const [selectedFile, setSelectedFile] = useState(null)

  const singleFileChangedHandler = (e) => {
    e.preventDefault()
    setSelectedFile(e.target.files[0])
  }

  const uploadFileHandler = async (e) => {
    e.preventDefault()
    // const file = e.target.files[0]
    const data = new FormData()

    // setUploading(true)
    if (selectedFile) {
      data.append('pdf', selectedFile, selectedFile.name)
      // const config = {
      //   headers: {
      //     'Accept-Language': 'en-US,en;q=0.8',
      //     accept: 'application/json',
      //     'Content-Type': `multipart/form-data';
      //     boundary=${data._boundary}`,
      //   },
      // }

      await axios
        .post('/api/upload', data, {
          headers: {
            'accept':'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data;
          boundary=${data._boundary}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            if (response.data.error) {
              if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                alert('Max size exceeded')
              } else {
                console.log(response.data)
                alert(response.data.error)
              }
            }
          }
        })
        .catch((error) => {})
      // setFileName(data)
      // setUploading(false)
    }
  }

  // const [fileName, setFileName] = useState('Test File path')
  // const [title, setTitle] = useState('Title')
  // const [branch, setBranch] = useState('MNC')
  // const [sem, setSem] = useState(1)
  // const [description, setDescription] = useState('Enter description')
  // const BranchList = ['MNC', 'CSE', 'ECE', 'EE']
  // const [uploading, setUploading] = useState(false)

  // const dispatch = useDispatch()

  // const materialCreate = useSelector((state) => state.materialCreate)
  // const {
  //   loading: loadingCreate,
  //   error: errorCreate,
  //   success: successCreate,
  //   material: newMaterial,
  // } = materialCreate

  // useEffect(() => {
  //   if (successCreate) {
  //     dispatch({ type: MATERIAL_CREATE_RESET })
  //     history.push('/material')
  //   }
  // }, [dispatch, successCreate])

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   dispatch(
  //     createMaterial({
  //       path: fileName,
  //       title,
  //       branch,
  //       sem,
  //       description,
  //     })
  //   )
  // }

  return (
    <>
      {/* <Link to='/' className='btn btn-dark my-3'>
        GO BACK
      </Link>
      <FormContainer>
        <Form>
          <Form.Group controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Branch</Form.Label>
            <Form.Control
              as='select'
              value={branch}
              onChange={(e) => setBranch(e.target.value)}>
              {BranchList.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Sem</Form.Label>
            <Form.Control
              as='select'
              value={sem}
              onChange={(e) => setSem(e.target.value)}>
              {[...Array(10).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='doc'>
            <Form.Label>DOC</Form.Label>
            <Form.Control type='text' placeholder={fileName}></Form.Control>
            <Form.File
              id='file'
              label='choose-file'
              custom
              onChange={uploadFileHandler}></Form.File>
            {/* {uploading && <Loader />} */}
      {/* </Form.Group>

          <Button onClick={submitHandler} variant='primary'>
            UPLOAD
          </Button>
        </Form>
      </FormContainer> */}

      <div className='card-body'>
        <p>Please Upload an image</p>
        <input type='file' onChange={singleFileChangedHandler} />
        <div>
          <button className='btn btn-info' onClick={uploadFileHandler}>
            UPLOAD
          </button>
        </div>
      </div>
    </>
  )
}

export default Upload
