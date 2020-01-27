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

      if (joueur.match !== parseInt(match.value) || joueur.buts !== parseInt(buts.value) || joueur.assists !== parseInt(assists.value) || joueur.penalites !== parseInt(penalites.value)) {
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

  // -----------> UPDATE CLASSEMENT <-----------
  const [classement, setClassement] = useState([])

  useEffect(() => {
    let isSubscribed = true

    getClassement()
    .then(response => {
      isSubscribed && setClassement(response)
    })
    .catch(err => console.log(err))

    return () => isSubscribed = false
  }, [classement])

  const getClassement = async () => {
    const response = await axios.get('/classementbdd')
    const body = await response.data
    const data = [...body]

    data.sort((a,b) => {
      const numeroA = a.points
      const numeroB = b.points

      let comparison = 0;
      if (numeroA < numeroB) {
        comparison = 1;
      } else if (numeroA > numeroB) {
        comparison = -1;
      }
      return comparison;
    })

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return data
  }

  function submitClassement(e) {
    e.preventDefault()

    let newClassement = []

    classement.map((equipe, index) => {
      let match = document.getElementById(equipe._id + '-match')
      let victoire = document.getElementById(equipe._id + '-victoire')
      let nul = document.getElementById(equipe._id + '-nul')
      let defaite = document.getElementById(equipe._id + '-defaite')
      let butsplus = document.getElementById(equipe._id + '-butsplus')
      let butsmoins = document.getElementById(equipe._id + '-butsmoins')
      let points = document.getElementById(equipe._id + '-points')
      let malus = document.getElementById(equipe._id + '-malus')

      if (equipe.match !== parseInt(match.value)) {
        newClassement.push({
          'equipeID': equipe._id,
          'match': parseInt(match.value),
          'victoire': parseInt(victoire.value),
          'nul': parseInt(nul.value),
          'defaite': parseInt(defaite.value),
          'butsplus': parseInt(butsplus.value),
          'butsmoins': parseInt(butsmoins.value),
          'diff': parseInt(butsplus.value) - parseInt(butsmoins.value),
          'points': parseInt(points.value),
          'malus': parseInt(malus.value),
        })
      }

      return newClassement
    })

    newClassement.map((equipe, index) => {
      let equipes = {
        'match': equipe.match,
        'victoire': equipe.victoire,
        'nul': equipe.nul,
        'defaite': equipe.defaite,
        'butsplus': equipe.butsplus,
        'butsmoins': equipe.butsmoins,
        'diff': equipe.diff,
        'points': equipe.points,
        'malus': equipe.malus,
      }

      axios.put('/classementbdd/' + equipe.equipeID, equipes)
      .then(function(response) {
        response.status === 200 && getClassement().then(res => setClassement(res)).catch(err => console.log(err))
      })
      .catch(function(err) {
        console.log('err : ', err)
      })

      return equipes
    })
  }

  // -----------> Résultat Champigny <-----------
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

  // -----------> Résultats du championnat <-----------
  const [champ, setChamp] = useState([])

  useEffect(() => {
    let isSubscribed = true

    getChamp()
    .then(response => {
      isSubscribed && setChamp(response)
    })
    .catch(err => console.log(err))

    return () => isSubscribed = false
  }, [champ])

  const getChamp = async () => {
    const response = await axios.get('/championnat')
    const body = await response.data

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  function resultChamp(e) {
    e.preventDefault()

    let newResultats = []

    champ.map((equipe, index) => {
      let score1 = document.getElementById(equipe._id + '-score1')
      let score2 = document.getElementById(equipe._id + '-score2')

      if (equipe.score1 !== parseInt(score1.value)) {
        newResultats.push({
          'gameID': equipe._id,
          'score1': score1.value,
          'score2': score2.value
        })
      }

      return newResultats
    })

    newResultats.map((equipe, index) => {
      let equipes = {
        'score1': equipe.score1,
        'score2': equipe.score2
      }

      axios.put('/championnat/' + equipe.gameID, equipes)
      .then(function(response) {
        response.status === 200 && getChamp().then(res => setChamp(res)).catch(err => console.log(err))
      })
      .catch(function(err) {
        console.log('err : ', err)
      })

      return equipes
    })
  }

  return (
    <Row className='justify-content-center'>
      <Col xs={12} xl={6}>
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
      <Col xs={12} xl={10}>
        <Card className='addGame'>
          <Card.Header>
            Update classement
          </Card.Header>
          <Card.Body>
            <Form onSubmit={submitClassement}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>equipe</th>
                    <th>M</th>
                    <th>V</th>
                    <th>N</th>
                    <th>D</th>
                    <th>B+</th>
                    <th>B-</th>
                    <th>Diff</th>
                    <th>P</th>
                    <th>Malus</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    classement.map((equipe, index) => {
                      return (
                        <tr key={index}>
                          <td>{equipe.equipe}</td>
                          <td>
                            <Form.Group>
                              <Form.Control type="number" id={equipe._id + '-match'} defaultValue={equipe.match}></Form.Control>
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group>
                              <Form.Control className='input-victoire' type="number" id={equipe._id + '-victoire'} defaultValue={equipe.victoire}></Form.Control>
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group>
                              <Form.Control type="number" id={equipe._id + '-nul'} defaultValue={equipe.nul}></Form.Control>
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group>
                              <Form.Control type="number" id={equipe._id + '-defaite'} defaultValue={equipe.defaite}></Form.Control>
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group>
                              <Form.Control type="number" id={equipe._id + '-butsplus'} defaultValue={equipe.butsplus}></Form.Control>
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group>
                              <Form.Control type="number" id={equipe._id + '-butsmoins'} defaultValue={equipe.butsmoins}></Form.Control>
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group>
                              <Form.Control type="number" id={equipe._id + '-diff'} defaultValue={equipe.diff}></Form.Control>
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group>
                              <Form.Control type="number" id={equipe._id + '-points'} defaultValue={equipe.points}></Form.Control>
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group>
                              <Form.Control type="number" id={equipe._id + '-malus'} defaultValue={equipe.malus}></Form.Control>
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
      <Col xs={12} xl={10}>
        <Card className='addGame'>
          <Card.Header>
            Update résultats
          </Card.Header>
          <Card.Body>
            <Form onSubmit={resultChamp}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Game ID</th>
                    <th>Date</th>
                    <th>Equipe 1</th>
                    <th>Score 1</th>
                    <th>Equipe 2</th>
                    <th>Score 2</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    champ.map((equipe, index) => {
                      return (
                        <tr key={index}>
                          <td>{equipe._id}</td>
                          <td>{equipe.date}</td>
                          <td>{equipe.equipe1}</td>
                          <td>
                            <Form.Group>
                              <Form.Control type="number" id={equipe._id + '-score1'} defaultValue={equipe.score1}></Form.Control>
                            </Form.Group>
                          </td>
                          <td>{equipe.equipe2}</td>
                          <td>
                            <Form.Group>
                              <Form.Control type="number" id={equipe._id + '-score2'} defaultValue={equipe.score2}></Form.Control>
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
    </Row>
  )
}

export default Admin
