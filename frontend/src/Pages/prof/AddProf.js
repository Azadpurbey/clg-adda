import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import axios from 'axios'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { PROF_CREATE_RESET } from '../../constants/profConstants'
import { createProf } from '../../actions/profAction'

const AddProf = ({ history }) => {
  const [img_path, setImg_path] = useState('')
  const [name, setName] = useState('examplename')
  const [email, setEmail] = useState('example@gmail.com')
  const [contact, setContact] = useState('96788**990')
  const [department, setDepartment] = useState('MNC')
  const [designation, setDesignation] = useState('Professor')
  const [areaOfInterest, setAreaOfInterest] = useState(
    'Quantum computing and error correction in cubits and Grapg theory and Topology'
  )
  const DepartmentList = ['MNC', 'CSE', 'ECE', 'EE']
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const profCreate = useSelector((state) => state.profCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    prof: newProf,
  } = profCreate

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PROF_CREATE_RESET })
      history.push('/profDetail/MNC')
    }
  }, [dispatch, successCreate])

  const uploadFileHandler = async (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
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
      const { data } = await axios.post('/api/upload/image', formData, config)
      setImg_path(data.location)
      setUploading(false)
    } catch (error) {
      alert('only image')
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProf({
        img_path,
        name,
        email,
        contact,
        department,
        designation,
        areaOfInterest,
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
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='department'>
            <Form.Label>Department</Form.Label>
            <Form.Control
              as='select'
              value={department}
              onChange={(e) => setDepartment(e.target.value)}>
              {DepartmentList.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='contact'>
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type='text'
              value={contact}
              onChange={(e) => setContact(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='designation'>
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type='text'
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='areaOfInterest'>
            <Form.Label>Area Of Interest</Form.Label>
            <Form.Control
              type='text'
              value={areaOfInterest}
              onChange={(e) =>
                setAreaOfInterest(e.target.value)
              }></Form.Control>
          </Form.Group>

          <Form.Group controlId='img_path'>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type='text'
              placeholder='img_path'
              value={img_path}></Form.Control>
            <Form.File
              id='img_path'
              label='choose-file'
              custom
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

export default AddProf
