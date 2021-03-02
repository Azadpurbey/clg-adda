import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import ProfileTop from '../../components/ProfileTop'
import ProfileAbout from '../../components/ProfileAbout'
const Profile = () => {
  return (
    <Fragment>
      <Link to='/' className='btn btn-dark'>
        HomePage
      </Link>
      <Link to='/profie/edit' className='btn btn-dark'>
        Edit
      </Link>
      <div className='profile-grid my-1'>
        <ProfileTop />
        <ProfileAbout />
      </div>
    </Fragment>
  )
}

export default Profile
