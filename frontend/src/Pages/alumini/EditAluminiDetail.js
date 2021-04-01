import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { listAluminiDetail, updateAlumini } from '../../actions/aluminiAction'
import { ALUMINI_UPDATE_RESET } from '../../constants/aluminiConstants'

const EditAluminiDetail = ({ match, history }) => {
  const aluminiId = match.params.id
  const [img_path, setImg_path] = useState('')
  const [name, setName] = useState('examplename')
  const [email, setEmail] = useState('example@gmail.com')
  const [contact, setContact] = useState('')
  const [batch, setBatch] = useState('')
  const [department, setDepartment] = useState('MNC')
  const [designation, setDesignation] = useState('')
  const [linkedIn, setLinkedIn] = useState('')
  const [twitter, setTwitter] = useState('')
  const [instagram, setInstagram] = useState('')
  const [facebook, setFacebook] = useState('')

  const DepartmentList = [
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

  const aluminiDetail = useSelector((state) => state.aluminiDetail)
  const { loading, error, alumini } = aluminiDetail

  const aluminiUpdate = useSelector((state) => state.aluminiUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
    // alumini: aluminiUpdate,
  } = aluminiUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: ALUMINI_UPDATE_RESET })
      history.push('/alumini/MNC')
    } else {
      if (alumini === undefined || !alumini.name || alumini._id !== aluminiId) {
        dispatch(listAluminiDetail(aluminiId))
      } else {
        setImg_path(alumini.img_path)
        setName(alumini.name)
        setEmail(alumini.email)
        setContact(alumini.contact)
        setBatch(alumini.batch)
        setDepartment(alumini.department)
        setDesignation(alumini.designation)
        setLinkedIn(alumini.linkedIn)
        setTwitter(alumini.twitter)
        setInstagram(alumini.instagram)
        setFacebook(alumini.facebook)
      }
    }
  }, [dispatch, alumini, aluminiId, history, successUpdate])

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
      updateAlumini({
        _id: aluminiId,
        img_path,
        name,
        email,
        contact,
        batch,
        department,
        designation,
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
        <h1>Edit Alumini Detail</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
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
                value={img_path}
                onChange={(e) => setImg_path(e.target.value)}></Form.Control>
              <Form.File
                id='img_path'
                label='choose-file'
                custom
                onChange={uploadFileHandler}></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Button type='submit' variant='primary'>
              UPDATE
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default EditAluminiDetail
