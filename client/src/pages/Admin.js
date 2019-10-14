import React from 'react'
import { Container } from 'react-bootstrap'

import Admin from '../components/Admin'

const AdminPage = () => {
  return (
    <section className='admin'>
      <Container fluid>
        <Admin />
      </Container>
    </section>
  )
}

export default AdminPage
