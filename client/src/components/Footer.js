import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Iframe from 'react-iframe'

import email from '../img/contact/email_icon.png'
import facebook from '../img/contact/fb_icon.png'
import twitter from '../img/contact/twitter_icon.png'

const Footer = () => {
  return (
    <Container fluid>
      <Row id='footer' className='footer justify-content-center'>
        <Col xs={12} md={3} className='footer-contact'>
          <h3>Nous Contacter</h3>
          <p><img className='footer-contact-icon' src={email} alt='icon email' /><a href='mailto:elansloisir@gmail.com'>elansloisir@gmail.com</a></p>
          <p><img className='footer-contact-icon' src={facebook} alt='icon facebook' /><a href='https://www.facebook.com/leselansloisir'>Facebook</a></p>
          <p><img className='footer-contact-icon' src={twitter} alt='icon twitter' /><a href='https://twitter.com/EGofficiel'>Twitter</a></p>
        </Col>
        <Col xs={12} md={3} className='footer-find'>
          <h3>Où nous trouver</h3>
          <p>Patinoire de Champigny sur Marne</p>
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.060729307329!2d2.5075996159138465!3d48.81890271143987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60dae2199b4c3%3A0x761e528092cc38bb!2s3%20Boulevard%20Jules%20Guesde%2C%2094500%20Champigny-sur-Marne!5e0!3m2!1sfr!2sfr!4v1569423386398!5m2!1sfr!2sfr"
            width="100%"
            display="initial"
            position="relative"/>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
