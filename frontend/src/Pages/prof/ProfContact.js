import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProfContactBox from '../../components/ProfContactBox'

const ProfContact = () => {
  return (
    <div style={{ backgroundColor: 'red', margin: '0px', padding: '0' }}>
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
