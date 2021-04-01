import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import axios from 'axios'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { ALUMINI_CREATE_RESET } from '../../constants/aluminiConstants'
import {
  listAluminiDetails,
  CreateAlumini,
  createAlumini,
} from '../../actions/aluminiAction'

const AddAlumini = ({ history }) => {
  const [img_path, setImg_path] = useState('/logo192.png')
  const [name, setName] = useState('example')
  const [email, setEmail] = useState('example@gmail.com')
  const [contact, setContact] = useState('888***888')
  const [department, setDepartment] = useState('MNC')
  const [designation, setDesignation] = useState('Software Developer')
  const [batch, setBatch] = useState('20**')
  const [linkedIn, setLinkedIn] = useState('www.linkedin.com/in/examplename')
  const [twitter, setTwitter] = useState('www.twitter.com/in/examplename')
  const [instagram, setInstagram] = useState('www.instagram.com/examplename')
  const [facebook, setFacebook] = useState('www.facebook.com/examplename')
  const DepartmentList = ['MNC', 'CSE', 'ECE', 'EE']
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const aluminiCreate = useSelector((state) => state.aluminiCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    alumini: newAlumini,
  } = aluminiCreate

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: ALUMINI_CREATE_RESET })
      history.push('/alumini/MNC')
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
      alert('only img')
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createAlumini({
        img_path,
        name,
        email,
        contact,
        department,
        designation,
        batch,
        linkedIn,
        twitter,
        instagram,
        facebook,
      })
    )
  }

  return (
    <>
      <Link to='/' className='btn btn-dark my-3'>
        GO BACK
      </Link>
      <FormContainer>
        <Form onSubmit={submitHandler}>
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
          <Form.Group controlId='batch'>
            <Form.Label>Batch</Form.Label>
            <Form.Control
              type='text'
              value={batch}
              onChange={(e) => setBatch(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId='linkedIn'>
            <Form.Label>LinkedIn</Form.Label>
            <Form.Control
              type='text'
              value={linkedIn}
              onChange={(e) => setLinkedIn(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId='twitter'>
            <Form.Label>Twitter</Form.Label>
            <Form.Control
              type='text'
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId='instagram'>
            <Form.Label>Instagram</Form.Label>
            <Form.Control
              type='text'
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='facebook'>
            <Form.Label>Facebook</Form.Label>
            <Form.Control
              type='text'
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}></Form.Control>
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

          <Button type='submit' variant='primary'>
            UPLOAD
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default AddAlumini
