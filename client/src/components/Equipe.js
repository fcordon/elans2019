import React, { useState, useEffect } from 'react'
import { Row, Col, Figure } from 'react-bootstrap'

import equipe from '../img/equipes/loisirs_2018_2019.jpg'
import equipeMobile from '../img/equipes/loisirs_2018_2019_mobile.png'

const Equipe = () => {
  const [teamFigure, setTeamFigure] = useState('')

  useEffect(() => {
    window.innerWidth < 1025 ? setTeamFigure(equipeMobile) : setTeamFigure(equipe)
  }, [])

  return (
    <Row className='home-equipe'>
      <Col xs={12} lg={6} className='home-equipe-img'>
        <Figure>
          <Figure.Image
            alt="Equipe des Elans loisir de Champigny"
            src={teamFigure}
          />
          <Figure.Caption>
            Les Elans loisir de Champigny 2018/2019
          </Figure.Caption>
        </Figure>
      </Col>
      <Col xs={12} lg={6} className='home-equipe-article'>
        <h3>L'équipe des Elans Loisir...</h3>
        <p>...est une équipe de hockey qui évolue en Ligue 1 du Trophée Fédéral Loisir. Nous sommes une équipe qui aime s'amuser mais aussi la compétition.</p>
      </Col>
    </Row>
  );
}

export default Equipe
