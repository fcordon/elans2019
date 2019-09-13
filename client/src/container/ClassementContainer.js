import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'

import Classement from '../components/Classement'

const ClassementContainer = () => {
  const getClassement = async () => {
    const response = await axios.get('/classement')
    const body = await response.data

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  const [classement, setClassement] = useState([])

  useEffect(() => {
    getClassement()
    .then(res => setClassement(res))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className='home-classement'>
      <Col xs={12} className='home-classement-title'>
        <h2>Classement Trophée Loisir Ligue 1</h2>
      </Col>
      <Row className='home-classement-header'>
        <Col xs={2}>
          place
        </Col>
        <Col xs={6}>
          équipe
        </Col>
        <Col xs={2}>
          points
        </Col>
        <Col xs={2}>
          malus
        </Col>
      </Row>
      {classement.map((data, i) => <Classement key={i} {...data} place={i} />)}
    </div>
  )
}

export default ClassementContainer
