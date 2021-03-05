import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAluminiDetail } from '../actions/aluminiAction'
import style from '../css/AluminiDetailBox.module.css'
const AluminiDetailBox = ({ alumini }) => {
  const dispatch = useDispatch()
  const profileHandler = () => {
    dispatch(getAluminiDetail(alumini._id))
  }

  return (
    <div className={style.profile}>
      <img src={alumini.img_path} alt='' className='round-img' />
      <div>
        <h5>{alumini.name}</h5>
        <p>Batch of {alumini.batch}</p>
        {alumini.designation}
        <p>{alumini.department}</p>
        {/* <Button onClick={profileHandler} className='btn btn-primary'> */}
        <Link
          to={`/alumini/profile/${alumini._id}`}
          onClick={profileHandler}
          className='btn btn-primary'>
          View Profile
        </Link>
        {/* </Button> */}
      </div>
    </div>
  )
}

export default AluminiDetailBox
