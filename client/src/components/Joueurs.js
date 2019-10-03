import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Card } from 'react-bootstrap'

const Joueurs = (props) => {
  const getJoueur = async () => {
    const response = await axios.get('/joueurs')
    const body = await response.data

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  const [joueurs, setJoueurs] = useState([])

  useEffect(() => {
    getJoueur()
    .then(res => setJoueurs(res))
    .catch(err => console.log(err))
  }, [])

  return (
    <Row>
      <Col xs={12} md={4}>
        <Card>
          <Card.Header>Attaquants</Card.Header>
          <Card.Body>
            {joueurs.map((joueur, i) => {
              return (
                <Row key={i}>
                  <Col>
                    {joueur.position === 'attaquant' && joueur.nom}
                  </Col>
                  <Col>
                    {joueur.position === 'attaquant' && joueur.prenom}
                  </Col>
                  <Col>
                    {joueur.position === 'attaquant' && joueur.numero}
                  </Col>
                </Row>
              )
            })}
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card>
          <Card.Header>Défenseurs</Card.Header>
          <Card.Body>
            {joueurs.map((joueur, i) => {
              return (
                <Row key={i}>
                  <Col>
                    {joueur.position === 'défenseur' && joueur.nom}
                  </Col>
                  <Col>
                    {joueur.position === 'défenseur' && joueur.prenom}
                  </Col>
                  <Col>
                    {joueur.position === 'défenseur' && joueur.numero}
                  </Col>
                </Row>
              )
            })}
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card>
          <Card.Header>Gardiens</Card.Header>
          <Card.Body>
            {joueurs.map((joueur, i) => {
              return (
                <Row key={i}>
                  <Col>
                    {joueur.position === 'gardien' && joueur.nom}
                  </Col>
                  <Col>
                    {joueur.position === 'gardien' && joueur.prenom}
                  </Col>
                  <Col>
                    {joueur.position === 'gardien' && joueur.numero}
                  </Col>
                </Row>
              )
            })}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Joueurs
