import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Calendrier = (props) => {
  return (
    <Row className='home-calendrier'>
      <Col xs={4} className='home-calendrier-date'>
        {props.gameDate}
      </Col>
      <Col xs={4} className='home-calendrier-equipe'>
        {props.patinoire === 'home' ? props.equipe1 : props.equipe2} Vs {props.patinoire === 'home' ? props.equipe2 : props.equipe1}
      </Col>
      <Col xs={4} className='home-calendrier-resultat'>
        {props.resultat}
      </Col>
    </Row>
  )
}

export default Calendrier
