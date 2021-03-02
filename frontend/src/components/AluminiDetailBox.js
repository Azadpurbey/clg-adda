import React from 'react'
import { Link } from 'react-router-dom'

const AluminiDetailBox = () => {
  return (
    <div className='profile bg-light'>
      <img src={'/soumya.jpeg'} alt='' className='round-img' />
      <div>
        <h2>Soumya Prakash</h2>
        <p>Batch of 2022</p>
        <span>Currently at Samsung R&D</span>
        <p>
          <span>Maths & Computing</span>
        </p>
        <Link to='/profile' className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        Expertise in
        <li className='text-dark'>
          <i className='fas fa-check' /> C/C++
        </li>
        <li className='text-dark'>
          <i className='fas fa-check' /> MERN-stack
        </li>
        <li className='text-dark'>
          <i className='fas fa-check' /> DBMS
        </li>
      </ul>
    </div>
  )
}

export default AluminiDetailBox
