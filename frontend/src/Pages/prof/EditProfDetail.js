import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { listProfDetail, updateProf } from '../../actions/profAction'
import { PROF_UPDATE_RESET } from '../../constants/profConstants'

const EditProfDetail = ({ match, history }) => {
  const profId = match.params.id
  const [img_path, setImg_path] = useState('')
  const [name, setName] = useState('examplename')
  const [email, setEmail] = useState('example@gmail.com')
  const [contact, setContact] = useState('96788**990')
  const [department, setDepartment] = useState('MNC')
  const [designation, setDesignation] = useState('Professor')
  const [areaOfInterest, setAreaOfInterest] = useState(
    'Machile Learning and Artifical robotics, Working on self Driving car'
  )
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
  ]
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const profDetail = useSelector((state) => state.profDetail)
  const { loading, error, prof } = profDetail

  const profUpdate = useSelector((state) => state.profUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
    // prof: profUpdate,
  } = profUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PROF_UPDATE_RESET })
      history.push('/profDetail/MNC')
    } else {
      if (prof === undefined || !prof.name || prof._id !== profId) {
        dispatch(listProfDetail(profId))
      } else {
        setImg_path(prof.img_path)
        setName(prof.name)
        setEmail(prof.email)
        setContact(prof.contact)
        setDepartment(prof.department)
        setDesignation(prof.designation)
        setAreaOfInterest(prof.areaOfInterest)
      }
    }
  }, [dispatch, prof, profId, history, successUpdate])

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
      updateProf({
        _id: profId,
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
        <h1>Edit Prof Detail</h1>
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

export default EditProfDetail
