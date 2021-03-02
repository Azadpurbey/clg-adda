import React from 'react'
import { useSelector } from 'react-redux'
const ProfileTop = () => {
  const { userInfo } = useSelector((state) => state.userLogin)
  const { user } = userInfo
  console.log(user.name)
  return (
    <div className='profile-top bg-primary p-2'>
      <div className='row'>
        <div className='col-sm-2 col-md-8'>
          <img className='round-img my-1' src={'./soumya.jpeg'} alt='' />
        </div>
        <div class='col-sm-4 col-md-4'>
          <p style={{ paddingTop: '80px' }} className='lead'>
            {user.name}
          </p>
          <p className='lead'>{user.branch}</p>
          <p>{user.admission}</p>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  )
}
export default ProfileTop
