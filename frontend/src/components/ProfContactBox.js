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
        <img src='logo512.png' alt='' />
      </div>
      <div className='info'>
        <h5 className='later'>Name: Azad Kumar</h5>
        <h5 className='later'>Email: azadpurbey2@gmail.com</h5>
        <h5 className='later'>Contact: 9571*****3</h5>
        <h5 className='later'>Department:MNC</h5>
        <h5 className='later'>Designation: Professor</h5>
        <p className='later'>
          Area of Interest:Ore Geology, Mining Geology, Environmental Geology,
          Medical
        </p>
      </div>
    </div>
  )
}

export default ProfContactBox
