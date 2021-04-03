import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Message from './Message'
import Loader from './Loader'

import { useDispatch, useSelector } from 'react-redux'
import { addFollowingAction, listUserDetail } from '../actions/auth'
import { Link } from 'react-router-dom'

const SingleUserProfile = ({ match, history }) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [loading2, setLoading2] = useState(true)
  const { userInfo } = useSelector((state) => state.userLogin)
  const { loading, error, curUser } = useSelector((state) => state.userDetail)

  useEffect(async () => {
    dispatch(listUserDetail(match.params.id))

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const { data } = await axios.get(
        `/api/user/followCheck/${match.params.id}`,
        config
      )
      //console.log('$$', data)
      setShow(data.message)
      setLoading2(false)
    } catch (error) {
      //console.log(error)
    }
  }, [history, match])

  const followHandler = (e) => {
    e.preventDefault()
    dispatch(addFollowingAction(match.params.id))
    setShow(!show)
  }

  return (
    <>
      <Link className='btn btn-dark my-3' to='/users'>
        GO BACK
      </Link>
      {loading || loading2 ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        curUser && (
          <div className='container'>
            <div className='main-body'>
              <div className='row gutters-sm'>
                <div className='col-md-4 mb-3'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-flex flex-column align-items-center text-center'>
                        <img
                          src={curUser.img_path}
                          alt='Admin'
                          className='rounded-circle'
                          width='150'
                        />
                        <div className='mt-3'>
                          <h4>{curUser.name}</h4>
                          <p className='text-secondary mb-1'>{curUser.about}</p>
                          <p className='text-muted font-size-sm'>
                            Dhanbad, India
                          </p>
                          <button
                            className='btn btn-primary'
                            onClick={followHandler}>
                            {show ? 'UnFollow' : 'Follow'}
                          </button>
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
                            strokeWidth='round'
                            strokeLinejoin='round'
                            className='feather feather-linkedin mr-2 icon-inline'>
                            <circle cx='12' cy='12' r='10'></circle>
                            <line x1='2' y1='12' x2='22' y2='12'></line>
                            <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'></path>
                          </svg>
                          LinkedIn
                        </h6>
                        <a className='text-secondary' href={curUser.linkedIn}>
                          {curUser.linkedIn}
                        </a>
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
                            strokeWidth='round'
                            strokeLinejoin='round'
                            className='feather feather-twitter mr-2 icon-inline text-info'>
                            <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                          </svg>
                          Twitter
                        </h6>
                        <a className='text-secondary' href={curUser.twitter}>
                          {curUser.twitter}
                        </a>
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
                            strokeWidth='round'
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
                        <a className='text-secondary' href={curUser.instagram}>
                          {curUser.instagram}
                        </a>
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
                            strokeWidth='round'
                            strokeLinejoin='round'
                            className='feather feather-facebook mr-2 icon-inline text-primary'>
                            <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                          </svg>
                          Facebook
                        </h6>
                        <a className='text-secondary' href={curUser.facebook}>
                          {curUser.facebook}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-md-8'>
                  <div className='card mb-3'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Full Name</h6>
                        </div>
                        <div className='col-sm-9 text-secondary'>
                          {curUser.name}
                        </div>
                      </div>
                      <hr></hr>
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Email</h6>
                        </div>
                        <div className='col-sm-9 text-secondary'>
                          {curUser.email}
                        </div>
                      </div>
                      <hr></hr>
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Batch</h6>
                        </div>
                        <div className='col-sm-9 text-secondary'>
                          {curUser.admission}
                        </div>
                      </div>
                      <hr></hr>
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Branch</h6>
                        </div>
                        <div className='col-sm-9 text-secondary'>
                          {curUser.branch}
                        </div>
                      </div>
                      <hr></hr>
                    </div>
                  </div>

                  <div className='row gutters-sm style1'>
                    <div className='col-sm-6 mb-3 card'>
                      <div className='card-body'>
                        <h6 className='d-flex align-items-center mb-3'>
                          <i className='material-icons text-info mr-2'>
                            Imp Tips
                          </i>
                        </h6>
                        {curUser.tips && (
                          <ol>
                            {curUser.tips.map((x) => (
                              <li key={x._id}>{x.tip}</li>
                            ))}
                          </ol>
                        )}
                      </div>
                    </div>

                    <div className='col-sm-6 mb-3 card'>
                      <div className='card-body'>
                        <h6 className='d-flex align-items-center mb-3'>
                          <i className='material-icons text-info mr-2'>
                            Imp Links
                          </i>
                        </h6>
                        {curUser.impLinks && (
                          <ol>
                            {curUser.impLinks.map((x) => (
                              <li key={x._id}>
                                <a className='text-secondary' href={x.link}>
                                  {x.link}
                                </a>
                              </li>
                            ))}
                          </ol>
                        )}
                      </div>
                    </div>
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

export default SingleUserProfile
