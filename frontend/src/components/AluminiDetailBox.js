import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { listAluminiDetail } from '../actions/aluminiAction'
import style from '../css/AluminiDetailBox.module.css'
const AluminiDetailBox = ({ alumini, deleteHandler }) => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)
  const profileHandler = () => {
    dispatch(listAluminiDetail(alumini._id))
  }

  return (
    <div className={style.profile}>
      <img src={alumini.img_path} alt='' className='round-img' />

      <div>
        {userInfo?.user?.isAdmin && (
          <Col className='text-right colChange'>
            <LinkContainer to={`/alumini/edit/${alumini._id}`}>
              <i className='fas fa-edit'>Edit</i>
            </LinkContainer>
            <i className='fas fa-trash' onClick={deleteHandler}>
              Delete
            </i>
          </Col>
        )}
        <h5>{alumini.name}</h5>
        <p>Batch of {alumini.batch}</p>
        {alumini.designation}
        <p>{alumini.department}</p>
        <Link
          to={`/alumini/profile/${alumini._id}`}
          onClick={profileHandler}
          className='btn btn-primary'>
          View Profile
        </Link>
      </div>
    </div>
  )
}

export default AluminiDetailBox
