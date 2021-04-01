import React, { useEffect, useState } from 'react'
import '../../css/Material.css'
import { Form, Button, ListGroup, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import Doc from '../../components/Doc'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { listMaterials } from '../../actions/materialAction'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
const Material = ({ history }) => {
  const dispatch = useDispatch()
  const [branch, setBranch] = useState('MNC')
  const [sem, setSem] = useState(1)
  const BranchList = [
    'MNC',
    'CSE',
    'ECE',
    'EE',
    'CHE',
    'MME',
    'CE',
    'PE',
    'CIV',
    'MECH',
    'EI',
    'PE',
  ]

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  // get all related material
  const materialList = useSelector((state) => state.materialList)
  const { loading, error, materials } = materialList
  const { success } = useSelector((state) => state.materialDelete)
  useEffect(() => {
    if (!userInfo) {
      history.push('/signin')
    } else {
      dispatch(listMaterials(sem, branch))
    }
  }, [dispatch, sem, branch, success])

  return (
    <>
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
                <Col>Branch</Col>
                <Col>
                  <Form.Control
                    as='select'
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}>
                    {BranchList.map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col>Semester</Col>
                <Col>
                  <Form.Control
                    as='select'
                    value={sem}
                    onChange={(e) => setSem(e.target.value)}>
                    {[...Array(10).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className='text-right'>
          <Link className='btn btn-dark my-3' to='/material/upload'>
            <i className='fas fa-plus'></i>Upload
          </Link>
        </Col>
      </Row>
      <h3 style={{ textAlign: 'center' }}>
        Material of branch {branch} and sem {sem}
      </h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : materials == undefined ? (
        <h1>materials not loaded</h1>
      ) : (
        <>
          <Row style={{ margin: '50px' }}>
            {materials.length == 0 && (
              <Message variant='success'>{`No any material is available of choosen sem and branch`}</Message>
            )}
            {materials.map((material) => {
              return (
                <Col key={material._id} sm={6} md={3} lg={2} xl={2}>
                  <Doc material={material} user={userInfo.user} />
                </Col>
              )
            })}
          </Row>
        </>
      )}
    </>
  )
}

export default Material
