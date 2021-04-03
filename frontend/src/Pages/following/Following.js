import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listUserTipLink } from '../../actions/auth'
import FollowingBox from '../../components/FollowingBox'
import Loader from '../../components/Loader'
import Message from '../../components/Message'

const Following = ({ history }) => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)

  const { loading, error, tipLink } = useSelector((state) => state.userTipLink)
  useEffect(() => {
    if (!userInfo) {
      history.push('/signin')
    } else {
      dispatch(listUserTipLink(userInfo?.user?._id))
    }
  }, [])

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        GO BACK
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : tipLink?.length === 0 ? (
        <Message variant='success'>
          {`Currently You don't follow any one`}
        </Message>
      ) : (
        <div>
          <Row>
            {tipLink &&
              tipLink.map((x, i) => (
                <Col key={i} sm={12} md={6} lg={6} xl={6}>
                  <FollowingBox
                    key={i}
                    name={x.name}
                    tips={x.tips}
                    impLinks={x.impLinks}
                  />
                </Col>
              ))}
          </Row>
        </div>
      )}
    </>
  )
}

export default Following
