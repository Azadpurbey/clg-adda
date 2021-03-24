import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProfileTop from '../../components/ProfileTop'
import ProfileAbout from '../../components/ProfileAbout'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../../css/Profile.module.css'
const style1 = {
  borderStyle: 'none',
  borderColor: 'black',
  width: '100%',
  height: '100%',
  display: 'block',
  boxSizing: 'border-box',
  borderWidth: '1px',
  marginBottom: '1px',
}
const style2 = {
  width: '100%',
  boxSizing: 'border-box',
  height: '35px',
  padding: '5px',
}
const style3 = {
  width: '250px',
  border: '1px solid black',
}
const Profile = () => {
  const { userInfo } = useSelector((state) => state.userLogin)
  const { user } = userInfo
  return (
    <div className='container'>
      <div className='main-body'>
        <Link className='btn btn-outline-primary my-3' to='/'>
          Home
        </Link>
        <Link className='btn btn-outline-primary my-3' to='/profile/edit'>
          Update
        </Link>

        <div className='row gutters-sm'>
          <div className='col-md-4 mb-3'>
            <div className='card'>
              <div className='card-body'>
                <div className='d-flex flex-column align-items-center text-center'>
                  <img
                    src={user.img_path}
                    alt='Admin'
                    className='rounded-circle'
                    width='150'
                  />
                  <div className='mt-3'>
                    <h4>{user.name}</h4>
                    <p className='text-secondary mb-1'>{user.about}</p>
                    <p className='text-muted font-size-sm'>
                      Bay Area, San Francisco, CA
                    </p>
                    <button className='btn btn-primary'>Followers : 5</button>
                    <button className='btn btn-outline-primary'>
                      Following : {user.following.length}
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
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='feather feather-linkedin mr-2 icon-inline'
                    >
                      <circle cx='12' cy='12' r='10'></circle>
                      <line x1='2' y1='12' x2='22' y2='12'></line>
                      <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'></path>
                    </svg>
                    LinkedIn
                  </h6>
                  <span className='text-secondary'>{user.linkedIn}</span>
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
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='feather feather-twitter mr-2 icon-inline text-info'
                    >
                      <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                    </svg>
                    Twitter
                  </h6>
                  <span className='text-secondary'>{user.twitter}</span>
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
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='feather feather-instagram mr-2 icon-inline text-danger'
                    >
                      <rect
                        x='2'
                        y='2'
                        width='20'
                        height='20'
                        rx='5'
                        ry='5'
                      ></rect>
                      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                      <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
                    </svg>
                    Instagram
                  </h6>
                  <span className='text-secondary'>bootdey</span>
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
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='feather feather-facebook mr-2 icon-inline text-primary'
                    >
                      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                    </svg>
                    Facebook
                  </h6>
                  <span className='text-secondary'>bootdey</span>
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
                  <div className='col-sm-9 text-secondary'>{user.name}</div>
                </div>
                <hr></hr>
                <div className='row'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>Email</h6>
                  </div>
                  <div className='col-sm-9 text-secondary'>{user.email}</div>
                </div>
                <hr></hr>
                <div className='row'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>Batch</h6>
                  </div>
                  <div className='col-sm-9 text-secondary'>{user.batch}</div>
                </div>
                <hr></hr>
                <div className='row'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>Branch</h6>
                  </div>
                  <div className='col-sm-9 text-secondary'>{user.branch}</div>
                </div>
                <hr></hr>
                <div className='row'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>Designation</h6>
                  </div>
                  <div className='col-sm-9 text-secondary'>Student</div>
                </div>
              </div>
            </div>
            <div className='row gutters-sm'>
              <div className='col-sm-6 mb-3'>
                <div className='card h-100'>
                  <div className='card-body'>
                    <h6 className='d-flex align-items-center mb-3'>
                      <i className='material-icons text-info mr-2'>Imp Tips</i>
                    </h6>
                    <ol>
                      <li>{user.tips}</li>
                      <li>Website Markuli</li>
                      <li>One liage</li>
                      <li>Mobile Temlilate</li>
                      <li>Backend AliI</li>
                    </ol>
                    <div id='container' style={style3}>
                      <textarea style={style1}></textarea>
                      <div style={style2}>
                        <button style={{ float: 'right' }}>Add Tips</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 mb-3'>
                <div className='card h-100'>
                  <div className='card-body'>
                    <h6 className='d-flex align-items-center mb-3'>
                      <i className='material-icons text-info mr-2'>Imp Links</i>
                    </h6>
                    <ol>
                      <li>
                        <em>
                          <u>
                            <a href='url1.com'>Link to project1</a>
                          </u>
                        </em>
                      </li>
                      <li>
                        <em>
                          <u>
                            <a href='url1.com'>Link to project2</a>
                          </u>
                        </em>
                      </li>
                      <li>
                        <em>
                          <u>
                            <a href='url1.com'>Link to project3</a>
                          </u>
                        </em>
                      </li>
                      <li>
                        <em>
                          <u>
                            <a href='url1.com'>Link to project4</a>
                          </u>
                        </em>
                      </li>
                    </ol>
                    <div id='container' style={style3}>
                      <textarea style={style1}></textarea>
                      <div style={style2}>
                        <button style={{ float: 'right' }}>Add Links</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
