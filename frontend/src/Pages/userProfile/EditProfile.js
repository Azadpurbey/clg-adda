import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { update } from '../../actions/auth'
import FormContainer from '../../components/FormContainer'
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
  const [isError, setIsError] = useState(false)

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

  const { loading, success, error } = useSelector(
    (state) => state.updateUserProfile
  )
  const history = useHistory()
  const dispatch = useDispatch()

  const OnSubmit = (e) => {
    e.preventDefault()
    if (password2 === password) {
      dispatch(update({ name, branch, admission, password }))
    } else {
      setIsError(true)
    }
  }
  useEffect(() => {
    if (success) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET })
      history.push('/profile')
    }
  }, [success, history])

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
              onChange={(e) => setBranch(e.target.value)}
            >
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
              onChange={(e) => setAdmission(e.target.value)}
            >
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
          <button type='submit' className='btn btn-primary'>
            Update
          </button>
        </form>
      </div>
    </>
  )
}

export default EditProfile
