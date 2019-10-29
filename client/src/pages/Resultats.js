import React from 'react'
import { Container } from 'react-bootstrap'

import CompteRebours from '../components/CompteRebours'
import Resultats from '../components/Resultats'

const ResultatsPage = () => {
  return (
    <section className='resultats'>
      <CompteRebours />
      <Container fluid>
        <Resultats />
      </Container>
    </section>
  )
}

export default ResultatsPage
