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
        <img src={prof.img_path} className='round-img' />
      </div>
      <div className='info'>
        <div>
          {' '}
          <h5>Name: {prof.name}</h5>
        </div>

        <div>
          <h5>Email:</h5> {prof.email}
        </div>
        <div>
          <h5>Contact:</h5> {prof.contact}
        </div>
        <div>
          <h5>Department:</h5>
          {prof.department}
        </div>
        <div>
          <h5>Designation:</h5> {prof.designation}
        </div>
        <div>
          <h5>Area of Interest:</h5> {prof.areaOfInterest}
        </div>
      </div>
    </div>
  )
}

export default ProfDetailBox
