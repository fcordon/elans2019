import React from 'react'
import { Row, Col } from 'react-bootstrap'

import equipe from '../img/equipes/loisirs_2018_2019.jpg'

const Equipe = () => {
  return (
    <Row className='home-equipe'>
      <Col xs={12} lg={8} className='home-equipe-img'>
        <img src={equipe} alt='Equipe des Elans loisir de Champigny' />
      </Col>
      <Col xs={12} lg={4} className='home-equipe-article'>
        <h3>L'équipe des Elans Loisir...</h3>
        <p>...est une équipe de hockey qui évolue en Ligue 1 du Trophée Fédéral Loisir. Nous sommes une équipe qui aime s'amuser mais aussi la compétition.</p>
      </Col>
    </Row>
  );
}

export default Equipe
