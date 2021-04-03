import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import '../css/ProfDetailBox.css'
const ProfDetailBox = ({ prof, deleteHandler }) => {
  const { userInfo } = useSelector((state) => state.userLogin)

  return (
    <div className='main_box'>
      <div className='image'>
        <img src={prof.img_path} className='round-img' />
        {userInfo?.user?.isAdmin && (
          <Col className='text-right colChange'>
            <LinkContainer to={`/profDetail/edit/${prof._id}`}>
              <i className='fas fa-edit'>Edit</i>
            </LinkContainer>
            <i className='fas fa-trash' onClick={deleteHandler}>
              Delete
            </i>
          </Col>
        )}
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
