import React, { useState } from 'react'
import { Form, Button, ListGroup, Row, Col } from 'react-bootstrap'
import ProfContactBox from '../../components/ProfContactBox'
import { Link } from 'react-router-dom'
const ProfContact = () => {
  const BranchList = ['MNC', 'CSE', 'ECE', 'EE']
  const [branch, setBranch] = useState('MNC')
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
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        {[...Array(10).keys()].map((prof) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProfContactBox />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProfContact

// {[...Array(10).keys()].map((x) => (
// 	<option key={x + 1} value={x + 1}>
// 	  {x + 1}
// 	</option>
//   ))}
