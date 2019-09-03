import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

const CompteRebours = () => {
  const [decompte, setDecompte] = useState('0 jours 0h 0min 0s')
  const gameDate = new Date('September 8, 2019 18:30:00').getTime()

  function diffDate() {
    let todayDate = new Date().getTime()

    let distance = gameDate - todayDate
    let day = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let secondes = Math.floor((distance % (1000 * 60)) / 1000)

    setDecompte(day + ' jours ' + hours + 'h ' + minutes + 'min ' + secondes + 's')
  }

  setInterval(diffDate, 1000)

  return (
    <Row className='home-compteRebours'>
      <Col xs={4} className='home-compteRebours-infos'>
        <h3>Prochain Match</h3>
        <p>1ère Journée du trophée<br/>loisir - Match aller</p>
      </Col>
      <Col xs={8} className='home-compteRebours-decompte'>
        <span>{decompte}</span>
      </Col>
    </Row>
  )
}

export default CompteRebours
