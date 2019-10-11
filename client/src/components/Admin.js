import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Accordion, Card, Button, Table, Form } from 'react-bootstrap'

const Admin = () => {
  const [stats, setStats] = useState([])

  useEffect(() => {
    getJoueur()
    .then(res => setStats(res))
    .catch(err => console.log(err))
  }, [])

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
      let points = document.getElementById(joueur._id + '-points')
      let penalites = document.getElementById(joueur._id + '-penalites')

      if (joueur.match !== parseInt(match.value)) {
        joueurStats.push({
          'nom': joueur.nom,
          'prenom': joueur.prenom,
          'match': parseInt(match.value),
          'buts': parseInt(buts.value),
          'assists': parseInt(assists.value),
          'points': parseInt(points.value),
          'penalites': parseInt(penalites.value),
          'numero': joueur.numero
        })
      }

      console.log('joueurStats : ', joueurStats)

      return joueurStats

    })
  }

  return (
    <Row className='justify-content-center'>
      <Col xs={12} xl={6}>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              Stats des joueurs
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
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
                                  <Form.Control type="number" id={joueur._id + '-buts'} defaultValue={joueur.buts}></Form.Control>
                                </Form.Group>
                              </td>
                              <td>
                                <Form.Group>
                                  <Form.Control type="number" id={joueur._id + '-assists'} defaultValue={joueur.assists}></Form.Control>
                                </Form.Group>
                              </td>
                              <td>
                                <Form.Group>
                                  <Form.Control type="number" id={joueur._id + '-points'} defaultValue={joueur.points}></Form.Control>
                                </Form.Group>
                              </td>
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
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    </Row>
  )
}

export default Admin
