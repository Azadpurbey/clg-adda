import React from 'react'
import { useSelector } from 'react-redux'

const Following = () => {
  const { userInfo } = useSelector((state) => state.userLogin)
  const { user } = userInfo
  return (
    <>
      <h1>I am following</h1>
      {/* <Tips/>
            <ImportantLinks/> */}
    </>
  )
}

export default Following
