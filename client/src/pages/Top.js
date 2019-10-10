import React from 'react'
import { Container } from 'react-bootstrap'

import Top from '../components/Top'

const TopPage = () => {
  return (
    <section className='topFive'>
      <Container fluid>
        <Top />
      </Container>
    </section>
  )
}

export default TopPage
