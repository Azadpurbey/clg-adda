import React, { Fragment } from 'react'
import ProfileItem from './ProfileItem'
import { Link } from 'react-router-dom'

const Profiles = () => {
  return (
    <Fragment>
      <Link to='/' className='btn btn-dark'>
        HomePage
      </Link>
      <h1 className='large text-primary'>Aluminis</h1>
      <p className='lead'>
        <i className='fab fa-connectdevelop' /> Browse and connect with aluminis
      </p>
      <div className='profiles'>
        <ProfileItem />
        <ProfileItem />
        <ProfileItem />
        <ProfileItem />
      </div>
    </Fragment>
  )
}

export default Profiles
