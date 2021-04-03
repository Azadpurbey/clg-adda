import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { userListAction } from '../actions/auth'
import Loader from './Loader'
import Message from './Message'

const UserList = ({ history }) => {
  const dispatch = useDispatch()
  const { loading, error, userLists } = useSelector((state) => state.userList)

  const { userInfo } = useSelector((state) => state.userLogin)
  useEffect(() => {
    if (!userInfo) {
      history.push('/signin')
    } else dispatch(userListAction())
  }, [dispatch])
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
        <Table striped bordered hover responsive bordered className='table-sm'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Branch</td>
              <td>Admission</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {userLists &&
              userLists.map((u) => (
                <tr key={u._id}>
                  <td>{u.name}</td>
                  <td>
                    <a href={`mailto:${u.email}`}>{u.email}</a>
                  </td>
                  <td>{u.branch}</td>
                  <td>{u.admission}</td>
                  <td>
                    <LinkContainer to={`/user/${u._id}`}>
                      <Button variant='light' className='btn btn-dark'>
                        View
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default UserList
