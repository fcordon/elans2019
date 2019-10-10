import React from 'react'
import { Container } from 'react-bootstrap'

import Stats from '../components/Stats'

const StatsPage = () => {
  return (
    <section className='stats'>
      <Container fluid>
        <Stats />
      </Container>
    </section>
  )
}

export default StatsPage
