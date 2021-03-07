import React, { useEffect, useState } from 'react'
import { Form, Button, ListGroup, Row, Col } from 'react-bootstrap'
import ProfDetailBox from '../../components/ProfDetailBox'
import { Link } from 'react-router-dom'
import { listProfs, deleteProf } from '../../actions/profAction'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'

const ProfList = ({ history }) => {
  const dispatch = useDispatch()
  const DepartmentList = ['MNC', 'CSE', 'ECE', 'EE']
  const [department, setDepartment] = useState('MNC')

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const Data = useSelector((state) => state.profList)
  const { loading, error, profs } = Data

  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = useSelector((state) => state.profDelete)

  useEffect(() => {
    if (!userInfo) {
      history.push('/signin')
    } else {
      history.push(`/profDetail/${department}`)
      dispatch(listProfs(department))
    }
  }, [dispatch, history, userInfo, department, successDelete])

  const deleteProfDetailHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProf(id))
    }
  }

  return (
    <div style={{ backgroundColor: 'lightcyan', margin: '0', padding: '0' }}>
      <Row>
        <Col md={3}>
          <Link className='btn btn-dark my-3' to='/'>
            GO BACK
          </Link>
        </Col>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Department</Col>
                <Col>
                  <Form.Control
                    as='select'
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}>
                    {DepartmentList.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : profs && profs.length === 0 ? (
          <Message variant='success'>{`No prof details of this branch is available`}</Message>
        ) : (
          profs &&
          profs.map((prof) => {
            return (
              <Col key={prof._id} sm={12} md={6} lg={4} xl={3}>
                <ProfDetailBox
                  prof={prof}
                  deleteHandler={() => deleteProfDetailHandler(prof._id)}
                />
              </Col>
            )
          })
        )}
      </Row>
    </div>
  )
}

export default ProfList
