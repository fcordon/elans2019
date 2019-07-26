import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'

import chcLogo from './img/backgroundHD/logo-champigny.png'
import Menu from './components/Menu'

import './scss/App.scss'
import './scss/journal.min.css'

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <Menu />
      </header>
      <section className="App-content">
        <Col xs={12} md={6} lg={4}>
          <Card>
            <Card.Header>
              <Card.Title>L'équipe</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                Les Elans loisir de Champigny sont une équipe de hockey qui évolue en Ligue 1 du Trophé Fédéral Loisir.
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </section>
    </section>
  );
}

export default App;
