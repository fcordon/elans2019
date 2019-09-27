import React, { useState, useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'

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
    <Col xs={12} md={6} lg={3}>
      <Card border={props.resultat === 'victoire' ? 'success' : props.resultat === 'défaite' ? 'danger' : 'secondary'}>
        <Card.Header>{gameDate}</Card.Header>
        <Card.Body>
          <Card.Title>
            <Row>
              <Col className='calendrier-equipe-name' xs={5}>
                {props.patinoire === 'home' ? props.equipe1 : props.equipe2}
              </Col>
              <Col className='calendrier-equipe-name' xs={{ span: 5, offset: 2 }}>
                {props.patinoire === 'home' ? props.equipe2 : props.equipe1}
              </Col>
            </Row>
          </Card.Title>
          <Row>
            <Col className='calendrier-equipe-img' xs={4}>
              <img src={props.patinoire === 'home' ? '/equipes/logo-'+props.equipe1+'-100x100.png' : '/equipes/logo-'+props.equipe2+'-100x100.png'} alt={props.patinoire === 'home' ? props.equipe1 : props.equipe2} />
            </Col>
            <Col className='calendrier-score' xs={4}>
              {props.score1 === '' ? 'Vs' : props.patinoire === 'home' ? props.score1 + ' - ' + props.score2 : props.score2 + ' - ' + props.score1}
            </Col>
            <Col className='calendrier-equipe-img' xs={4}>
              <img src={props.patinoire === 'home' ? '/equipes/logo-'+props.equipe2+'-100x100.png' : '/equipes/logo-'+props.equipe1+'-100x100.png'} alt={props.patinoire === 'home' ? props.equipe2 : props.equipe1} />
            </Col>
          </Row>
          <Col xs={12} className={props.resultat === 'victoire' ? 'success calendrier-resultat' : props.resultat === 'défaite' ? 'danger calendrier-resultat' : 'secondary calendrier-resultat'}>
            Résultat du match : <span>{props.resultat}</span>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Calendrier
