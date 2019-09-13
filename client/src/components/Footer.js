import React from 'react'

import MapContainer from './GoogleMaps'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {

  return (
    <Row className='home-footer'>
      <Col xs={12} lg={8} className='home-equipe-img'>
        <MapContainer />
      </Col>
    </Row>
  );
}

export default Footer
