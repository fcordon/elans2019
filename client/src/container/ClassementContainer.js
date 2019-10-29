import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Table } from 'react-bootstrap'

import Classement from '../components/Classement'

const ClassementContainer = () => {
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

  const [classement, setClassement] = useState([])

  useEffect(() => {
    let isSubscribed = true

    getClassement()
    .then(res => isSubscribed && setClassement(res))
    .catch(err => console.log(err))

    return () => isSubscribed = false
  }, [])

  return (
    <section id='classement' className='home-classement'>
      <Col xs={12} className='home-classement-title'>
        <h2>Classement Trophée Loisir Ligue 1</h2>
      </Col>
      <section>
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Equipe</th>
              <th className='text-center'>Match</th>
              <th className='text-center'>Victoire</th>
              <th className='text-center'>Nul</th>
              <th className='text-center'>Défaite</th>
              <th className='text-center'>B+ / B-</th>
              <th className='text-center'>Diff</th>
              <th className='text-center'>Points</th>
              <th className='text-center'>Malus</th>
            </tr>
          </thead>
          <tbody>
            {classement.map((data, i) => <Classement key={i} {...data} place={i} />)}
          </tbody>
        </Table>
      </section>
    </section>
  )
}

export default ClassementContainer
