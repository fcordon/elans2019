import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Table } from 'react-bootstrap'

const Stats = (props) => {
  const [stats, setStats] = useState([])

  useEffect(() => {
    gatStats()
    .then(res => setStats(res))
    .catch(err => console.log(err))
  }, [])

  const gatStats = async () => {
    const response = await axios.get('/joueurs')
    const body = await response.data

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  return (
    <Row className="justify-content-center">
      <Col xs={12} sm={12} lg={10} xl={8} className='stats-table'>
      <Table responsive striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th className='text-center'>Matches</th>
            <th className='text-center'>Buts</th>
            <th className='text-center'>Assistes</th>
            <th className='text-center'>Points</th>
            <th className='text-center'>Pénalités</th>
          </tr>
        </thead>
        <tbody>
        {stats.map((joueur, i) => {
          if(joueur.match !== 0) {
            let nom = joueur.nom
            let prenom = joueur.prenom
            let match = joueur.match
            let buts = joueur.buts
            let assists = joueur.assists
            let points = joueur.points
            let penalites = joueur.penalites
            
            return (
              <tr key={i}>
                <td>
                  {nom}
                </td>
                <td>
                  {prenom}
                </td>
                <td className='text-center'>
                  {match}
                </td>
                <td className='text-center'>
                  {buts}
                </td>
                <td className='text-center'>
                  {assists}
                </td>
                <td className='text-center'>
                  {points}
                </td>
                <td className='text-center'>
                  {penalites + ' min'}
                </td>
              </tr>
            )
          }
        })}
        </tbody>
      </Table>
      </Col>
    </Row>
  )
}

export default Stats
