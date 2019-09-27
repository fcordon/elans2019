import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'

const CompteRebours = (props) => {
  const getSchedule = async () => {
    const response = await axios.get('/calendrier')
    const body = await response.data

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  const [todayDate] = useState(new Date())
  const [gameArray, setGameArray] = useState([])

  useEffect(() => {
    let dateArray = []
    let today = todayDate.getTime()

    getSchedule()
    .then(res => {
      res.map((data) => {
        let nextGame = new Date(data.gameDate).getTime()

        if(nextGame - today > 0) {
          dateArray.push(nextGame)
        }

        return setGameArray(dateArray)
      })
    })
    .catch(err => console.log(err))
  }, [todayDate])

  const [decompte, setDecompte] = useState('0 jours 0h 0min 0s')

  function diffDate() {
    if(gameArray.length > 0) {
      let todayDate = new Date().getTime()
      let distance = gameArray[0] - todayDate
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
      <Row className='home-compteRebours-content'>
        <Col xs={12} md={4} className='home-compteRebours-infos'>
          <h3>Prochain Match</h3>
          <p>Trophée loisir 2019 / 2020 - Match aller</p>
        </Col>
        <Col xs={12} md={8} className='home-compteRebours-decompte'>
          {decompte}
        </Col>
      </Row>
    </div>
  )
}

export default CompteRebours
