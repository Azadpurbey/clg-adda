import React, { useEffect } from 'react'
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
  console.log('test', loading, error, tipLink)
  useEffect(() => {
    if (!userInfo) {
      history.push('/signin')
    } else {
      dispatch(listUserTipLink(userInfo.user._id))
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
      ) : (
        <div style={{ padding: '50px 200px' }}>
          {tipLink &&
            tipLink.map((x, i) => (
              <FollowingBox
                key={i}
                name={x.name}
                tips={x.tips}
                impLinks={x.impLinks}
              />
            ))}
        </div>
      )}
    </>
  )
}

export default Following
