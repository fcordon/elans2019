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

  return (
    <Row className="justify-content-center">
      <Col xs={12} sm={12} lg={10} xl={8} className='stats-table'>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th className='text-center'>M</th>
            <th className='text-center'>B</th>
            <th className='text-center'>A</th>
            <th className='text-center'>P</th>
            <th className='text-center'>B/M</th>
            <th className='text-center'>A/M</th>
            <th className='text-center'>P/M</th>
            <th className='text-center'>Pen</th>
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
                  {buts / match}
                </td>
                <td className='text-center'>
                  {assists / match}
                </td>
                <td className='text-center'>
                  {points / match}
                </td>
                <td className='text-center'>
                  {penalites + ' min'}
                </td>
              </tr>
            )
          }
          return true
        })}
        </tbody>
      </Table>
      <small>
        M = Match, B = Buts, A = Assists, P = Points, Pen = Pénalités
      </small>
      </Col>
    </Row>
  )
}

export default Stats
