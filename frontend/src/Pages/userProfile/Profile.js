import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import ProfileTop from '../../components/ProfileTop'
import ProfileAbout from '../../components/ProfileAbout'
import { Col, Container, Row } from 'react-bootstrap'
const Profile = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className='profile-grid my-1'>
            <ProfileTop />
            <ProfileAbout />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Profile
