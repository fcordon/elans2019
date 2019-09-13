import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Classement = (props) => {
  return (
    <Row className='home-classement-content'>
      <Col xs={2}>
        {props.place + 1}
      </Col>
      <Col xs={6}>
        {props.nom} de <span className='equipe-name'>{props.equipe}</span>
      </Col>
      <Col xs={2}>
        {props.points}
      </Col>
      <Col xs={2}>
        {props.malus}
      </Col>
    </Row>
  )
}

export default Classement
