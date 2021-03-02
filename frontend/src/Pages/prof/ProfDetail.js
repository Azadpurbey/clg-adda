import React, { useEffect, useState } from 'react'
import { Form, Button, ListGroup, Row, Col } from 'react-bootstrap'
import ProfDetailBox from '../../components/ProfDetailBox'
import { Link } from 'react-router-dom'
import { listProfs } from '../../actions/profAction'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'

const ProfDetail = ({ history }) => {
  const dispatch = useDispatch()
  const DepartmentList = ['MNC', 'CSE', 'ECE', 'EE']
  const [department, setDepartment] = useState('MNC')

  const Data = useSelector((state) => state.profDetail)
  const { loading, error, profs } = Data

  useEffect(() => {
    history.push(`/profDetail/${department}`)
    console.log(`list profs called`)
    dispatch(listProfs(department))
  }, [dispatch, department])
  console.log(profs)
  console.log(loading)
  console.log(`profs`, profs)

  return (
    <div style={{ backgroundColor: 'lightcyan', margin: '0px', padding: '0' }}>
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
        ) : (
          profs &&
          profs.map((prof) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <ProfDetailBox />
            </Col>
          ))
        )}

      </Row>
    </div>
  )
}

export default ProfDetail
