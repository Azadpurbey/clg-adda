import React from 'react'
import '../css/ProfDetailBox.css'
const ProfDetailBox = ({ prof }) => {
  const box = {
    backgroundColor: 'red',
  }
  return (
    <div className='main_box'>
      <div className='image'>
        {/* <i className='fas fa-check' /> C/C++ */}
        <img src='/logo512.png' />
      </div>
      <div className='info'>
        <p>
          {' '}
          <h5>Name: {prof.name}</h5>
        </p>

        <p className='later1'>
          <h5>Email:</h5> {prof.email}
        </p>
        <p className='later1'>
          <h5>Contact:</h5> {prof.contact}
        </p>
        <p className='later1'>
          <h5>Department:</h5>
          {prof.department}
        </p>
        <p className='later1'>
          <h5>Designation:</h5> {prof.designation}
        </p>
        <p className='later'>
          <h5>Area of Interest:</h5> {prof.areaOfInterest}
        </p>
      </div>
    </div>
  )
}

export default ProfDetailBox
