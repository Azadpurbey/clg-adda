import React, { useEffect, useState } from 'react'
import { Form, Button, ListGroup, Row, Col } from 'react-bootstrap'
import AluminiDetailBox from '../../components/AluminiDetailBox'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { deleteAlumini, listAluminies } from '../../actions/aluminiAction'

const Alumini = ({ history }) => {
  const dispatch = useDispatch()
  const DepartmentList = ['MNC', 'CSE', 'ECE', 'EE']
  const [department, setDepartment] = useState('MNC')

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const { loading, error, aluminies } = useSelector(
    (state) => state.aluminiList
  )

  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = useSelector((state) => state.aluminiDelete)

  useEffect(() => {
    if (!userInfo) {
      history.push('/signin')
    } else {
      history.push(`/alumini/${department}`)
      dispatch(listAluminies(department))
    }
  }, [dispatch, history, userInfo, department, successDelete])

  const deleteAluminiDetailHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteAlumini(id))
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
        ) : aluminies && aluminies.length === 0 ? (
          <Message variant='success'>{`No alumini details of this branch is available`}</Message>
        ) : (
          aluminies &&
          aluminies.map((alumini) => {
            return (
              <Col key={alumini._id} sm={12} md={6} lg={4} xl={3}>
                <AluminiDetailBox
                  alumini={alumini}
                  deleteHandler={() => deleteAluminiDetailHandler(alumini._id)}
                />
              </Col>
            )
          })
        )}
        {/* {[...Array(10).keys()].map((x) => {
          return (
            <Col keys={x} sm={12} md={6} lg={4} xl={3}>
              <AluminiDetailBox />
            </Col>
          )
        })} */}
      </Row>
    </div>
  )
}

export default Alumini
