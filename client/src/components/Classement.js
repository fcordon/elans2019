import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Classement = (props) => {
  return (
    <Row className='home-classement-content'>
      <Col xs={2}>
        {props.place + 1}
      </Col>
      <Col className='equipe-logo' md={2}>
        <img src={'./equipes/logo-' + props.equipe + '-100x100.png'} alt={props.nom + props.equipe} />
      </Col>
      <Col xs={6} md={4} className='home-classement-content-name'>
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
