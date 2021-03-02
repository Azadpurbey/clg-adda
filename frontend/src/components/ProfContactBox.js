import React from 'react'
import '../css/ProfContactBox.css'
const ProfContactBox = () => {
  const box = {
    backgroundColor: 'red',
  }
  return (
    <div className='main_box'>
      <div className='image'>
        {/* <i className='fas fa-check' /> C/C++ */}
        <img src='logo512.png' />
      </div>
      <div className='info'>
        <p>
          {' '}
          <h5>Name: Azad Kumar</h5>
        </p>

        <p className='later1'>
          <h5>Email:</h5> azadpurbey2@gmail.com
        </p>
        <p className='later1'>
          <h5>Contact:</h5> 9571*****3
        </p>
        <p className='later1'>
          <h5>Department:</h5>MNC
        </p>
        <p className='later1'>
          <h5>Designation:</h5> Professor
        </p>
        <p className='later'>
          <h5>Area of Interest:</h5> Ore Geology, Mining Geology, Environmental
          Geology, Medical
        </p>
      </div>
    </div>
  )
}

export default ProfContactBox
