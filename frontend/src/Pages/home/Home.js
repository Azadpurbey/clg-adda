import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import style from '../../css/Home.module.css'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux'
const Home = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

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
              <p>Users:91</p>
              <i className='fas fa-code-branch'></i>
              <p>Contributors:37</p>
            </div>
            {userInfo ? (
              <div className='buttons'>
                <Link className='btn btn-dark my-3' to='/profile'>
                  Profile
                </Link>
                <Link
                  className='btn btn-light my-3'
                  to={`/user/following/${userInfo.user._id}`}>
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
