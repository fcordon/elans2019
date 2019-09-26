import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

const Calendrier = (props) => {
  const [gameDate, setGameDate] = useState('')

  useEffect(() => {
    let bddDate = new Date(props.gameDate)
    let months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    let gameDay = bddDate.getDate() < 10 ? '0' + bddDate.getDate() : bddDate.getDate()
    let dateMonth = bddDate.getMonth()
    let gameMonth = months[dateMonth]
    let gameYear = bddDate.getFullYear()
    let gameHours = bddDate.getHours()
    let gameMin = bddDate.getMinutes()

    return setGameDate(gameDay + ' ' + gameMonth + ' ' + gameYear + ' à ' + gameHours + 'h' + gameMin)
  }, [props.gameDate])

  return (
    <section className='home-calendrier'>
      <Col xs={12} className='home-calendrier-date'>
        {gameDate}
      </Col>
      <Col xs={12} className='home-calendrier-equipe'>
        <Row>
          <Col className='home-calendrier-equipe-img' xs={4}>
            <img src={props.patinoire === 'home' ? '/equipes/logo-'+props.equipe1+'-100x100.png' : '/equipes/logo-'+props.equipe2+'-100x100.png'} alt={props.patinoire === 'home' ? props.equipe1 : props.equipe2} />
          </Col>
          <Col className='home-calendrier-score' xs={4}>
            {props.score1 === '' ? 'Vs' : props.patinoire === 'home' ? props.score1 + ' - ' + props.score2 : props.score2 + ' - ' + props.score1}
          </Col>
          <Col className='home-calendrier-equipe-img' xs={4}>
            <img src={props.patinoire === 'home' ? '/equipes/logo-'+props.equipe2+'-100x100.png' : '/equipes/logo-'+props.equipe1+'-100x100.png'} alt={props.patinoire === 'home' ? props.equipe2 : props.equipe1} />
          </Col>
        </Row>
        <Row>
          <Col className='home-calendrier-equipe-name' xs={4}>
            {props.patinoire === 'home' ? props.equipe1 : props.equipe2}
          </Col>
          <Col className='home-calendrier-equipe-name' xs={{ span: 4, offset: 4 }}>
            {props.patinoire === 'home' ? props.equipe2 : props.equipe1}
          </Col>
        </Row>
      </Col>
      <Col xs={12} className='home-calendrier-resultat'>
        <span>Résultat du match : {props.resultat}</span>
      </Col>
    </section>
  )
}

export default Calendrier
