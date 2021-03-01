import React from 'react'
import pic from '../../images/soumya_pic.jpeg'
const ProfileTop = () => {
  return (
    <div className='profile-top bg-primary p-2'>
      <div className='row'>
        <div className='col-sm-2 col-md-2'>
          <img className='round-img my-1' src={pic} alt='' />
        </div>
        <div className='col-sm-4 col-md-4'>
          <h1 className='large'>Soumya Prakash</h1>
          <p className='lead'>Maths & Computing(2017-2022)</p>
          <p>17JE002940</p>
          <p>Integrated M.Tech</p>
          <p>8th Sem</p>
          <p>ssoumyaprakash05@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
export default ProfileTop
