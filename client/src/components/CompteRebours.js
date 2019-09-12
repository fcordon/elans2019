import React, { useState } from 'react'
import { Col } from 'react-bootstrap'

const CompteRebours = (props) => {
  const [decompte, setDecompte] = useState('0 jours 0h 0min 0s')
  const gameDate = props.gameDate

  function diffDate() {
    if(gameDate !== undefined) {
      let todayDate = new Date().getTime()
      let distance = gameDate - todayDate
      let day = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let secondes = Math.floor((distance % (1000 * 60)) / 1000)

      setDecompte(day + 'j ' + hours + 'h ' + minutes + 'min ' + secondes + 's')
    }
  }

  setInterval(diffDate, 1000)

  return (
    <div className='home-compteRebours'>
      <Col xs={12} md={4} className='home-compteRebours-infos'>
        <h3>Prochain Match</h3>
        <p>1ère Journée du trophée loisir - Match aller</p>
      </Col>
      <Col xs={12} md={8} className='home-compteRebours-decompte'>
        <p>{decompte}</p>
      </Col>
    </div>
  )
}

export default CompteRebours
