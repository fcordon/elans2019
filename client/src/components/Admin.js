import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Card, Button, Table, Form } from 'react-bootstrap'

const Admin = () => {
  // -----------> Update des Stats de joueur <-----------
  const [stats, setStats] = useState([])

  useEffect(() => {
    let isSubscribed = true

    getJoueur()
    .then(response => {
      isSubscribed && setStats(response)
    })
    .catch(err => console.log(err))

    return () => isSubscribed = false
  }, [stats])

  const getJoueur = async () => {
    const response = await axios.get('/joueurs')
    const body = await response.data
    const data = [...body]

    data.sort((a,b) => {
      const numeroA = a.numero
      const numeroB = b.numero

      let comparison = 0;
      if (numeroA > numeroB) {
        comparison = 1;
      } else if (numeroA < numeroB) {
        comparison = -1;
      }
      return comparison;
    })

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return data
  }

  function submitStats(e) {
    e.preventDefault()

    let joueurStats = []

    stats.map((joueur, index) => {
      let match = document.getElementById(joueur._id + '-match')
      let buts = document.getElementById(joueur._id + '-buts')
      let assists = document.getElementById(joueur._id + '-assists')
      let penalites = document.getElementById(joueur._id + '-penalites')

      if (joueur.match !== parseInt(match.value)) {
        joueurStats.push({
          'joueurID': joueur._id,
          'match': parseInt(match.value),
          'buts': parseInt(buts.value),
          'assists': parseInt(assists.value),
          'points': parseInt(buts.value) + parseInt(assists.value),
          'penalites': parseInt(penalites.value)
        })
      }

      return joueurStats
    })

    joueurStats.map((stat, index) => {
      let stats = {
        'match': stat.match,
        'buts': stat.buts,
        'assists': stat.assists,
        'points': stat.points,
        'penalites': stat.penalites
      }

      axios.put('/joueurs/' + stat.joueurID, stats)
      .then(function(response) {
        response.status === 200 && getJoueur().then(res => setStats(res)).catch(err => console.log(err))
      })
      .catch(function(err) {
        console.log('err : ', err)
      })

      return stats
    })
  }

  // -----------> Ajout des matches <-----------
  function submitMatch(e) {
    e.preventDefault()

    let gameDate = document.getElementById('gameDate').value
    let timestamp = new Date(gameDate).getTime() / 1000
    let equipe1 = document.getElementById('equipe1').value
    let equipe2 = document.getElementById('equipe2').value
    let score1 = ''
    let score2 = ''
    let patinoire = equipe1 === 'champigny' ? 'home' : 'away'
    let resultat = 'non joué'

    let newGame = [{
      'gameDate': gameDate,
      'timestamp': timestamp,
      'equipe1': equipe1,
      'equipe2': equipe2,
      'score1': score1,
      'score2': score2,
      'patinoire': patinoire,
      'resultat': resultat
    }]

    axios.post('/calendrierbdd', newGame)
    .catch(function(err) {
      console.log('err : ', err)
    })
  }

  // -----------> Résultat des matches <-----------
  const [game, setGame] = useState([])

  useEffect(() => {
    let isSubscribed = true

    getGame()
    .then(response => {
      isSubscribed && setGame(response)
    })
    .catch(err => console.log(err))

    return () => isSubscribed = false
  }, [game])

  const getGame = async () => {
    const response = await axios.get('/calendrierbdd')
    const body = await response.data

    let todayDate = new Date()
    let gameArray = []
    let today = todayDate.getTime()

    body.map((data) => {
      let nextGame = new Date(data.gameDate).getTime()

      if(today - nextGame > 0 && data.resultat === 'non joué') {
        gameArray.push({id:data._id,equipe1:data.equipe1,equipe2:data.equipe2})
      }

      return gameArray
    })

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return gameArray
  }

  function resultMatch(e) {
    e.preventDefault()

    let gameID = document.getElementById('gameID').value
    let score1 = document.getElementById('score1').value
    let score2 = document.getElementById('score2').value
    let resultat = document.getElementById('resultat').value

    let game = {
      score1: score1,
      score2: score2,
      resultat: resultat
    }

    axios.put('/calendrierbdd/' + gameID, game)
    .then(function(response) {
      response.status === 200 && getGame().then(response => setStats(response)).catch(err => console.log(err))
    })
    .catch(function(err) {
      console.log('err : ', err)
    })
  }

  return (
    <Row className='justify-content-center'>
      <Col xs={12} xl={4}>
        <Card>
          <Card.Header>
            Stats des joueurs
          </Card.Header>
          <Card.Body>
            <Form onSubmit={submitStats}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Prénom</th>
                    <th>Match</th>
                    <th>Buts</th>
                    <th>Assists</th>
                    <th>Points</th>
                    <th>Pénalités</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    stats.map((joueur, index) => {
                      return (
                        <tr key={index}>
                          <td>{joueur.numero}</td>
                          <td>{joueur.prenom}</td>
                          <td>
                            <Form.Group>
                              <Form.Control type="number" id={joueur._id + '-match'} defaultValue={joueur.match}></Form.Control>
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group>
                              <Form.Control className='input-buts' type="number" id={joueur._id + '-buts'} defaultValue={joueur.buts}></Form.Control>
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group>
                              <Form.Control type="number" id={joueur._id + '-assists'} defaultValue={joueur.assists}></Form.Control>
                            </Form.Group>
                          </td>
                          <td>{joueur.points}</td>
                          <td>
                            <Form.Group>
                              <Form.Control type="number" id={joueur._id + '-penalites'} defaultValue={joueur.penalites}></Form.Control>
                            </Form.Group>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
              <Button type='submit'>Enregistrer</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} xl={4}>
        <Card className='addGame'>
          <Card.Header>
            Ajouter un match
          </Card.Header>
          <Card.Body>
            <Form onSubmit={submitMatch}>
              <Form.Group>
                <Form.Label>Date <small>(September 15, 2019 18:30:00)</small> : </Form.Label>
                <Form.Control type="text" id='gameDate' placeholder='September 15, 2019 18:30:00'></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Equipe 1 : </Form.Label>
                <Form.Control type="text" id='equipe1' placeholder='champigny'></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Equipe 2 : </Form.Label>
                <Form.Control type="text" id='equipe2' placeholder='champigny'></Form.Control>
              </Form.Group>
              <Button type='submit'>Enregistrer</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} xl={4}>
        <Card className='addGame'>
          <Card.Header>
            Résultat match
          </Card.Header>
          <Card.Body>
            {game.length > 0 && game.map((match, index) => {
              return (
                <Form onSubmit={resultMatch} key={index}>
                  <Form.Group>
                    <Form.Label>Game ID :</Form.Label>
                    <Form.Control type="text" id='gameID' defaultValue={match.id}></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Score {match.equipe1} :</Form.Label>
                    <Form.Control type="number" id='score1'></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Score {match.equipe2} :</Form.Label>
                    <Form.Control type="number" id='score2'></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Résultat du match :</Form.Label>
                    <Form.Control as='select' id='resultat'>
                      <option>victoire</option>
                      <option>défaite</option>
                      <option>match nul</option>
                    </Form.Control>
                  </Form.Group>
                  <Button type='submit'>Enregistrer</Button>
                </Form>
              )
            })}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Admin
