import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import '../../css/Material.css'
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

const AddMaterial = ({ history }) => {
  const { userInfo } = useSelector((state) => state.userLogin)

  const [fileName, setFileName] = useState('')

  const [title, setTitle] = useState('Title')
  const [branch, setBranch] = useState('MNC')
  const [sem, setSem] = useState(1)
  const [description, setDescription] = useState('Enter description')
  const BranchList = [
    'MNC',
    'CSE',
    'ECE',
    'EE',
    'CHE',
    'MME',
    'CE',
    'PE',
    'CIV',
    'MECH',
    'EI',
    'PE',
  ]
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const materialCreate = useSelector((state) => state.materialCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    material: newMaterial,
  } = materialCreate

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: MATERIAL_CREATE_RESET })
      history.push('/material')
    }
  }, [dispatch, successCreate])

  const uploadFileHandler = async (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    //console.log(file)

    const formData = new FormData()
    formData.append('pdf', file)
    setUploading(true)
    try {
      const config = {
        headers: {
          'Accept-Language': 'en-US,en;q=0.8',
          accept: 'application/json',
          'Content-Type': `multipart/form-data';
              boundary=${formData._boundary}`,
        },
      }

      const { data } = await axios.post(
        '/api/upload/material',
        formData,
        config
      )
      console.log('add material', data)
      setFileName(data.location)
      setUploading(false)
    } catch (error) {
      console.log('cur', error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createMaterial({
        path: fileName,
        title,
        branch,
        sem,
        description,
      })
    )
  }

  return (
    <>
      <Link to='/' className='btn btn-dark my-3'>
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

            {fileName && (
              <Form.Control
                type='text'
                placeholder='enter_file_path'
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}></Form.Control>
            )}

            <Form.File
              id='file'
              label='choose-file'
              custom
              accept='application/pdf'
              onChange={uploadFileHandler}></Form.File>
            {uploading && <Loader />}
          </Form.Group>

          <Button onClick={submitHandler} variant='primary'>
            UPLOAD
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default AddMaterial
