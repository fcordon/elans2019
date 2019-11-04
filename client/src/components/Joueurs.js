import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Card, Table } from 'react-bootstrap'

const Joueurs = (props) => {
  const [attaquants, setAttaquants] = useState([])

  useEffect(() => {
    let isSubscribed = true

    getJoueur()
    .then(res => {
      let joueurTable = []

      res.map((joueur) => {
        if(joueur.position === 'attaquant') {
          let joueurObjet = {nom:joueur.nom,prenom:joueur.prenom,numero:joueur.numero}
          joueurTable.push(joueurObjet)
        }

        return joueurTable
      })

      return isSubscribed && setAttaquants(joueurTable)
    })
    .catch(err => console.log(err))

    return () => isSubscribed = false
  }, [])

  const [defenseurs, setDefenseurs] = useState([])

  useEffect(() => {
    let isSubscribed = true

    getJoueur()
    .then(res => {
      let joueurTable = []

      res.map((joueur) => {
        if(joueur.position === 'défenseur') {
          let joueurObjet = {nom:joueur.nom,prenom:joueur.prenom,numero:joueur.numero}
          joueurTable.push(joueurObjet)
        }

        return joueurTable
      })

      return isSubscribed && setDefenseurs(joueurTable)
    })
    .catch(err => console.log(err))

    return () => isSubscribed = false
  }, [])

  const [gardiens, setGardiens] = useState([])

  useEffect(() => {
    let isSubscribed = true

    getJoueur()
    .then(res => {
      let joueurTable = []

      res.map((joueur) => {
        if(joueur.position === 'gardien') {
          let joueurObjet = {nom:joueur.nom,prenom:joueur.prenom,numero:joueur.numero}
          joueurTable.push(joueurObjet)
        }

        return joueurTable
      })

      return isSubscribed && setGardiens(joueurTable)
    })
    .catch(err => console.log(err))

    return () => isSubscribed = false
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
            <Table responsive striped hover>
              <tbody>
                {attaquants.map((joueur, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        {joueur.nom}
                      </td>
                      <td>
                        {joueur.prenom}
                      </td>
                      <td>
                        {joueur.numero}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={12} lg={4} xl={3} className='equipe-joueurs'>
        <Card>
          <Card.Header>Défenseurs</Card.Header>
          <Card.Body>
            <Table responsive striped hover>
              <tbody>
                {defenseurs.map((joueur, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        {joueur.nom}
                      </td>
                      <td>
                        {joueur.prenom}
                      </td>
                      <td>
                        {joueur.numero}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={12} lg={4} xl={3} className='equipe-joueurs'>
        <Card>
          <Card.Header>Gardiens</Card.Header>
          <Card.Body>
            <Table responsive striped hover>
              <tbody>
                {gardiens.map((joueur, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        {joueur.nom}
                      </td>
                      <td>
                        {joueur.prenom}
                      </td>
                      <td>
                        {joueur.numero}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Joueurs
