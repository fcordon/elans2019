import React from 'react'
import { Container } from 'react-bootstrap'

import Joueurs from '../components/Joueurs'

const EquipePage = () => {
  return (
    <section className='equipe'>
      <Container fluid>
        <Joueurs />
      </Container>
    </section>
  )
}

export default EquipePage
