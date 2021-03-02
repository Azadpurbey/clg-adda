import React, { Fragment } from 'react'
import AluminiDetailBox from '../../components/AluminiDetailBox'
import { Link } from 'react-router-dom'

const Alumini = () => {
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
        <AluminiDetailBox />
        <AluminiDetailBox />
      </div>
    </Fragment>
  )
}

export default Alumini
