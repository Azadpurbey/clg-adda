import React, { Fragment } from 'react'

const ProfileAbout = () => {
  return (
    <div className='profile-about bg-light p-2'>
      <Fragment>
        <h2 className='text-primary'>Activities</h2>
        <i class='fas fa-download m-1'></i> Downloads:5
        <i class='fas fa-upload m-1'></i> Uploads:5
        <div className='line' />
      </Fragment>
    </div>
  )
}

export default ProfileAbout