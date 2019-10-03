import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'

import Calendrier from '../components/Calendrier'

const CalendrierPage = () => {
  const getCalendrier = async () => {
    const response = await axios.get('/calendrierbdd')
    const body = await response.data

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  const [calendrier, setCalendrier] = useState([])

  useEffect(() => {
    getCalendrier()
    .then(res => setCalendrier(res))
    .catch(err => console.log(err))
  }, [])

  return (
    <section className='calendrier'>
      <Container fluid>
        <Row>
          {calendrier.map((data, i) => <Calendrier key={i} {...data} place={i} />)}
        </Row>
      </Container>
    </section>
  )
}

export default CalendrierPage
