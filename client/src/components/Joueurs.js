import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Card } from 'react-bootstrap'

const Joueurs = (props) => {
  const [joueurs, setJoueurs] = useState([])

  useEffect(() => {
    getJoueur()
    .then(res => setJoueurs(res))
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

  return (
    <Row className="justify-content-center">
      <Col xs={12} sm={12} lg={4} xl={3} className='equipe-joueurs'>
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
      <Col xs={12} sm={12} lg={4} xl={3} className='equipe-joueurs'>
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
      <Col xs={12} sm={12} lg={4} xl={3} className='equipe-joueurs'>
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
