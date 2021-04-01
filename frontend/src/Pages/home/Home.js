import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import style from '../../css/Home.module.css'
import Footer from '../../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { userListAction } from '../../actions/auth'
const Home = () => {
  const { userInfo } = useSelector((state) => state.userLogin)

  const dispatch = useDispatch()
  const { loading, error, userLists } = useSelector((state) => state.userList)

  useEffect(() => {
    dispatch(userListAction())
  }, [dispatch])

  return (
    <div className='home'>
      <section className={style.landing}>
        <div className={style.darkoverlay}>
          <div className={style.landinginner}>
            <h1 className={style.xlarge}>College Adda</h1>
            <p className={style.lead}>
              An online platform for students of IIT(ISM) to access study
              materials & can get in touch with aluminis & faculties.
            </p>
            <div className={style.icon}>
              <i className='fas fa-cloud-download-alt'></i>
              <p>Downloads:10</p>
              <i className='fas fa-users'></i>
              <p>Users:{userLists?.length}</p>
              <i className='fas fa-code-branch'></i>
              <p>Contributors: 3</p>
            </div>
            {userInfo ? (
              <div className='buttons'>
                <Link className='btn btn-dark my-3' to='/profile'>
                  Profile
                </Link>
                <Link
                  className='btn btn-light my-3'
                  to={`/tips/link/following`}>
                  Following
                </Link>
                <Col className='text-center'>Copyright &copy; ISM</Col>
              </div>
            ) : (
              <div className='buttons'>
                <Link className='btn btn-dark my-3' to='/signup'>
                  Register
                </Link>
                <Link className='btn btn-light my-3' to='/signin'>
                  Login
                </Link>
                <Col className='text-center'>Copyright &copy; ISM</Col>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
