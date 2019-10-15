import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'

const CompteRebours = (props) => {
  const getSchedule = async () => {
    const response = await axios.get('/calendrierbdd')
    const body = await response.data

    let dateArray = []
    let today = new Date().getTime()

    body.map((data) => {
      let nextGame = new Date(data.gameDate).getTime()

      if(nextGame - today > 0) {
        dateArray.push(nextGame)
      }

      return dateArray
    })

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return dateArray
  }

  const getTeams = async () => {
    const response = await axios.get('/calendrierbdd')
    const body = await response.data

    let teamArray = []
    let today = new Date().getTime()

    body.map((data) => {
      let nextGame = new Date(data.gameDate).getTime()

      if(nextGame - today > 0) {
        teamArray.push({equipe1:data.equipe1,equipe2:data.equipe2})
      }

      return teamArray
    })

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return teamArray
  }

  const [gameArray, setGameArray] = useState([])
  const [nextGame, setNextGame] = useState({})
  const windowWidth = window.innerWidth

  useEffect(() => {
    let isSubscribed = true

    getSchedule()
    .then(res => isSubscribed && setGameArray(res))
    .catch(err => console.log(err))

    getTeams()
    .then(res => {
      if(isSubscribed) {
        let backgroundUrl = ''

        windowWidth < 1024 ? backgroundUrl = './games/'+res[0].equipe1+'_'+res[0].equipe2+'_mobile.jpg' : backgroundUrl = './games/'+res[0].equipe1+'_'+res[0].equipe2+'.jpg'

        return setNextGame(backgroundUrl)
      }
    })
    .catch(err => console.log(err))

    return () => isSubscribed = false
  }, [windowWidth])

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
    <div className='compteRebours' style={{backgroundImage:'url('+nextGame+')',backgroundSize:'100% 100%',backgroundPosition:'center'}}>
      <Row className='compteRebours-content'>
        <Col xs={12} md={4} className='compteRebours-infos'>
          <h3>Prochain Match</h3>
          <p>Trophée loisir 2019 / 2020 - Match aller</p>
        </Col>
        <Col xs={12} md={8} className='compteRebours-decompte'>
          {decompte}
        </Col>
      </Row>
    </div>
  )
}

export default CompteRebours
