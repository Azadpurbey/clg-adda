import React, { useEffect, useState } from 'react'
import '../../css/Material.css'
import { Form, Button, ListGroup, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import Doc from '../../components/Doc'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { createMaterial, listMaterials } from '../../actions/materialAction'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { MATERIAL_CREATE_RESET } from '../../constants/materialConstants'
const Material = ({ history }) => {
  const dispatch = useDispatch()
  const [branch, setBranch] = useState('MNC')
  const [sem, setSem] = useState(1)
  const BranchList = ['MNC', 'CSE', 'ECE', 'EE']

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  // get all related material
  const materialList = useSelector((state) => state.materialList)
  const { loading, error, materials } = materialList

  // create new material
  const materialCreate = useSelector((state) => state.materialCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    material: newMaterial,
  } = materialCreate

  useEffect(() => {
    dispatch({ type: MATERIAL_CREATE_RESET })
    if (!userInfo) {
      history.push('/signin')
    } else if (successCreate) {
      history.push(`/material/${newMaterial._id}/edit`)
    } else {
      dispatch(listMaterials(sem, branch))
    }
  }, [dispatch, sem, branch, successCreate])

  const createMaterialHandler = () => {
    dispatch(createMaterial())
  }

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
          <Button className='my-3' onClick={createMaterialHandler}>
            <i className='fas fa-plus'></i>Upload
          </Button>
        </Col>
      </Row>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : materials == undefined ? (
        <h1>materials not loaded</h1>
      ) : (
        <>
          <Row>
            {materials.map((material) => {
              return (
                <Col key={material._id} sm={6} md={3} lg={2} xl={2}>
                  <Doc material={material} />
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
