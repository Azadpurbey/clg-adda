import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listUserTipLink } from '../../actions/auth'
import FollowingBox from '../../components/FollowingBox'
import Loader from '../../components/Loader'
import Message from '../../components/Message'

const Following = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)

  const { loading, error, tipLink } = useSelector((state) => state.userTipLink)
  console.log('test', loading, error, tipLink)
  useEffect(() => {
    dispatch(listUserTipLink(userInfo.user._id))
  }, [userInfo])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'></Message>
      ) : (
        tipLink &&
        tipLink.map((x, i) => (
          <FollowingBox
            key={i}
            name={x.name}
            tips={x.tips}
            impLinks={x.impLinks}
          />
        ))
      )}
    </>
  )
}

export default Following
