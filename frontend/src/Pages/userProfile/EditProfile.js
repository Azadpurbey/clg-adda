import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { update } from '../../actions/auth'
import FormContainer from '../../components/FormContainer'
import Loader from '../../components/Loader'
import { USER_UPDATE_PROFILE_RESET } from '../../constants/auth'
const style2 = {
  marginTop: '0px',
}
const EditProfile = () => {
  const { userInfo } = useSelector((state) => state.userLogin)
  const { user } = userInfo
  const [name, setName] = useState(user.name)
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [branch, setBranch] = useState(user.branch)
  const [admission, setAdmission] = useState(user.admission)
  const [img_path, setImg_path] = useState(user.img_path)
  const [isError, setIsError] = useState(false)

  const [linkedIn, setLinkedIn] = useState(user.linkedIn)
  const [twitter, setTwitter] = useState(user.twitter)
  const [instagram, setInstagram] = useState(user.instagram)
  const [facebook, setFacebook] = useState(user.facebook)

  const [uploading, setUploading] = useState(false)

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

  const { loading, success, error } = useSelector(
    (state) => state.updateUserProfile
  )
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (success) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET })
      history.push('/profile')
    }
  }, [success, history])

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

  const OnSubmit = (e) => {
    e.preventDefault()
    if (password2 === password) {
      dispatch(
        update({
          name,
          branch,
          admission,
          password,
          img_path,
          linkedIn,
          twitter,
          instagram,
          facebook,
        })
      )
    } else {
      setIsError(true)
    }
  }

  return (
    <>
      {loading && <h3>Loading...</h3>}
      {(error || isError) && <h3>Edit your Detail Properly</h3>}
      {success && <h3>Your profile is Updated</h3>}
      <Link to='/profile' className='btn btn-dark my-3'>
        Go Back
      </Link>
      <div className='container' style={{ marginTop: '0px' }}>
        <h3>Email: {user.email} </h3>
        <br />
        <FormContainer>
          <form className='form' onSubmit={OnSubmit}>
            <p>Edit your Profile</p>

            <div className='form-group'>
              <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <select
                name='branch'
                value={branch}
                onChange={(e) => setBranch(e.target.value)}>
                {DepartmentList.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>

            <div className='form-group'>
              <select
                name='admission'
                value={admission}
                onChange={(e) => setAdmission(e.target.value)}>
                {[...Array(20).keys()].map((x) => (
                  <option key={2010 + x} value={2010 + x}>
                    {2010 + x}
                  </option>
                ))}
              </select>
            </div>
            <p>Want to Change password</p>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Update Password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Confirm update Password'
                name='password2'
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
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
                onChange={uploadFileHandler}
                custom></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <button type='submit' className='btn btn-primary'>
              Update
            </button>
          </form>
        </FormContainer>
      </div>
    </>
  )
}

export default EditProfile
