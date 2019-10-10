import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Card, Table } from 'react-bootstrap'

const Top = () => {
  const [pointeurs, setPointeurs] = useState([])

  useEffect(() => {
    getJoueur()
    .then(res => {
      let joueurTable = []
      const data = [...res]

      data.sort((a,b) => {
        const compA = a.points
        const compB = b.points

        let comparison = 0;
        if (compA < compB) {
          comparison = 1;
        } else if (compA > compB) {
          comparison = -1;
        }
        return comparison;
      })

      data.map((joueur, index) => {
        if (index <= 4) {
          let ratio = isNaN(parseInt(joueur.points) / parseInt(joueur.match)) ? 0 : parseInt(joueur.points) / parseInt(joueur.match)
          let joueurObjet = {nom:joueur.nom,prenom:joueur.prenom,numero:joueur.numero,ratio:ratio,points:joueur.points}

          joueurTable.push(joueurObjet)
        }

        return joueurTable
      })

      return setPointeurs(joueurTable)
    })
    .catch(err => console.log(err))
  }, [])

  const [buteurs, setButeurs] = useState([])

  useEffect(() => {
    getJoueur()
    .then(res => {
      let joueurTable = []
      const data = [...res]

      data.sort((a,b) => {
        const compA = a.buts
        const compB = b.buts

        let comparison = 0;
        if (compA < compB) {
          comparison = 1;
        } else if (compA > compB) {
          comparison = -1;
        }
        return comparison;
      })

      data.map((joueur, index) => {
        if (index <= 4) {
          let ratio = isNaN(parseInt(joueur.buts) / parseInt(joueur.match)) ? 0 : parseInt(joueur.buts) / parseInt(joueur.match)
          let joueurObjet = {nom:joueur.nom,prenom:joueur.prenom,numero:joueur.numero,ratio:ratio,buts:joueur.buts}

          joueurTable.push(joueurObjet)
        }

        return joueurTable
      })

      return setButeurs(joueurTable)
    })
    .catch(err => console.log(err))
  }, [])

  const [assists, setAssists] = useState([])

  useEffect(() => {
    getJoueur()
    .then(res => {
      let joueurTable = []
      const data = [...res]

      data.sort((a,b) => {
        const compA = a.assists
        const compB = b.assists

        let comparison = 0;
        if (compA < compB) {
          comparison = 1;
        } else if (compA > compB) {
          comparison = -1;
        }
        return comparison;
      })

      data.map((joueur, index) => {
        if (index <= 4) {
          let ratio = isNaN(parseInt(joueur.assists) / parseInt(joueur.match)) ? 0 : parseInt(joueur.assists) / parseInt(joueur.match)
          let joueurObjet = {nom:joueur.nom,prenom:joueur.prenom,numero:joueur.numero,ratio:ratio,assists:joueur.assists}

          joueurTable.push(joueurObjet)
        }

        return joueurTable
      })

      return setAssists(joueurTable)
    })
    .catch(err => console.log(err))
  }, [])

  const [penalites, setPenalites] = useState([])

  useEffect(() => {
    getJoueur()
    .then(res => {
      let joueurTable = []
      const data = [...res]

      data.sort((a,b) => {
        const compA = a.penalites
        const compB = b.penalites

        let comparison = 0;
        if (compA < compB) {
          comparison = 1;
        } else if (compA > compB) {
          comparison = -1;
        }
        return comparison;
      })

      data.map((joueur, index) => {
        if (index <= 4) {
          let ratio = isNaN(parseInt(joueur.penalites) / parseInt(joueur.match)) ? 0 : parseInt(joueur.penalites) / parseInt(joueur.match)
          let joueurObjet = {nom:joueur.nom,prenom:joueur.prenom,numero:joueur.numero,ratio:ratio,penalites:joueur.penalites}

          joueurTable.push(joueurObjet)
        }

        return joueurTable
      })

      return setPenalites(joueurTable)
    })
    .catch(err => console.log(err))
  }, [])

  const getJoueur = async () => {
    const response = await axios.get('/joueurs')
    const body = await response.data

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  return (
    <Row className="justify-content-center">
      <Col xs={12} sm={12} lg={4} xl={4} className='topFive-card'>
        <Card className='topFive-pointeurs'>
          <Card.Header>Les Meilleurs Pointeurs</Card.Header>
          <Card.Body>
            <Table responsive striped hover size='sm'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th className='text-center'>Points</th>
                  <th className='text-center'>Ratio</th>
                </tr>
              </thead>
              <tbody>
                {pointeurs.map((joueur, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        {joueur.numero}
                      </td>
                      <td>
                        {joueur.nom}
                      </td>
                      <td>
                        {joueur.prenom}
                      </td>
                      <td className='text-center'>
                        {joueur.points}
                      </td>
                      <td className='text-center'>
                        {joueur.ratio}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={12} lg={4} xl={4} className='topFive-card'>
        <Card className='topFive-buteurs'>
          <Card.Header>Les Meilleurs Buteurs</Card.Header>
          <Card.Body>
            <Table responsive striped hover size='sm'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th className='text-center'>Buts</th>
                  <th className='text-center'>Ratio</th>
                </tr>
              </thead>
              <tbody>
                {buteurs.map((joueur, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        {joueur.numero}
                      </td>
                      <td>
                        {joueur.nom}
                      </td>
                      <td>
                        {joueur.prenom}
                      </td>
                      <td className='text-center'>
                        {joueur.buts}
                      </td>
                      <td className='text-center'>
                        {joueur.ratio}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={12} lg={4} xl={4} className='topFive-card'>
        <Card className='topFive-assists'>
          <Card.Header>Les Meilleurs Assists</Card.Header>
          <Card.Body>
            <Table responsive striped hover size='sm'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th className='text-center'>Assists</th>
                  <th className='text-center'>Ratio</th>
                </tr>
              </thead>
              <tbody>
                {assists.map((joueur, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        {joueur.numero}
                      </td>
                      <td>
                        {joueur.nom}
                      </td>
                      <td>
                        {joueur.prenom}
                      </td>
                      <td className='text-center'>
                        {joueur.assists}
                      </td>
                      <td className='text-center'>
                        {joueur.ratio}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={12} lg={4} xl={4} className='topFive-card'>
        <Card className='topFive-penalites'>
          <Card.Header>Les plus pénalisés</Card.Header>
          <Card.Body>
            <Table responsive striped hover size='sm'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th className='text-center'>Pénalités</th>
                  <th className='text-center'>Ratio</th>
                </tr>
              </thead>
              <tbody>
                {penalites.map((joueur, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        {joueur.numero}
                      </td>
                      <td>
                        {joueur.nom}
                      </td>
                      <td>
                        {joueur.prenom}
                      </td>
                      <td className='text-center'>
                        {joueur.penalites + ' min'}
                      </td>
                      <td className='text-center'>
                        {joueur.ratio}
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

export default Top
