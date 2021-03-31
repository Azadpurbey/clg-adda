import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listUserTipLink } from '../../actions/auth'
import FollowingBox from '../../components/FollowingBox'

const Following = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)

  const { loading, error, tipLink } = useSelector((state) => state.userTipLink)
  console.log('test', loading, error, tipLink)
  useEffect(() => {
    dispatch(listUserTipLink(userInfo.user._id))
    console.log('from Following page2', tipLink)
  }, [])
  console.log('from Following page', tipLink)

  return (
    <>
      <FollowingBox />
      <FollowingBox />
      <FollowingBox />
      <FollowingBox />
      <FollowingBox />
    </>
  )
}

export default Following
