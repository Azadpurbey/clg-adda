import React, { useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { listAluminiDetail } from '../../actions/aluminiAction'

import AluminiDetailBox from '../../components/AluminiDetailBox'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import '../../css/AluminiProfilePage.css'

const AluminiprofilePage = ({ history }) => {
  const dispatch = useDispatch()
  const { loading, error, alumini } = useSelector(
    (state) => state.aluminiDetail
  )
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    if (!userInfo) {
      history.push('/signin')
    }
  }, [dispatch, loading])

  return (
    <>
      <Link className='btn btn-dark my-3' to='/alumini/MNC'>
        GO BACK
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        alumini && (
          <div className='container'>
            <div className='main-body'>
              <div className='row gutters-sm'>
                <div className='col-md-4 mb-3'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-flex flex-column align-items-center text-center'>
                        <img
                          src={alumini.img_path}
                          alt='Admin'
                          className='rounded-circle'
                          width='150'
                        />
                        <div className='mt-3'>
                          <h4>{alumini.name}</h4>
                          <p className='text-secondary mb-1'>
                            {alumini.designation}
                          </p>
                          <p className='text-secondary mb-1'>
                            Batch {alumini.batch}
                          </p>
                          <button className='btn btn-primary'>Follow</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-8'>
                  <div className='card mb-3'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Name</h6>
                        </div>
                        <div className='col-sm-9 text-secondary'>
                          {alumini.name}
                        </div>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Email</h6>
                        </div>
                        <div className='col-sm-9 text-secondary'>
                          {alumini.email}
                        </div>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Contact</h6>
                        </div>
                        <div className='col-sm-9 text-secondary'>
                          {alumini.contact}
                        </div>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Batch</h6>
                        </div>
                        <div className='col-sm-9 text-secondary'>
                          {alumini.batch}
                        </div>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Department</h6>
                        </div>
                        <div className='col-sm-9 text-secondary'>
                          {alumini.department}
                        </div>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Designation</h6>
                        </div>
                        <div className='col-sm-9 text-secondary'>
                          {alumini.designation}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card mt-3'>
                    <ul className='list-group list-group-flush'>
                      <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                        <h6 className='mb-0'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-globe mr-2 icon-inline'>
                            <circle cx='12' cy='12' r='10'></circle>
                            <line x1='2' y1='12' x2='22' y2='12'></line>
                            <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'></path>
                          </svg>
                          LinkedIn
                        </h6>
                        <span className='text-secondary'>
                          {alumini.linkedIn}
                        </span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                        <h6 className='mb-0'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-twitter mr-2 icon-inline text-info'>
                            <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                          </svg>
                          Twitter
                        </h6>
                        <span className='text-secondary'>
                          {alumini.twitter}
                        </span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                        <h6 className='mb-0'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-instagram mr-2 icon-inline text-danger'>
                            <rect
                              x='2'
                              y='2'
                              width='20'
                              height='20'
                              rx='5'
                              ry='5'></rect>
                            <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                            <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
                          </svg>
                          Instagram
                        </h6>
                        <span className='text-secondary'>
                          {alumini.instagram}
                        </span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                        <h6 className='mb-0'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-facebook mr-2 icon-inline text-primary'>
                            <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                          </svg>
                          Facebook
                        </h6>
                        <span className='text-secondary'>
                          {alumini.facebook}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  )
}

export default AluminiprofilePage
