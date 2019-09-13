import React from 'react'
import { Row, Col } from 'react-bootstrap'

import email from '../img/contact/email_icon.png'
import facebook from '../img/contact/fb_icon.png'
import twitter from '../img/contact/twitter_icon.png'

const Footer = () => {
  return (
    <Row className='home-footer'>
      <Col xs={12} md={6} className='home-footer-contact'>
        <h3>Nous Contacter</h3>
        <p><img className='home-footer-contact-icon' src={email} alt='icon email' /><a href='mailto:elansloisir@gmail.com'> elansloisir@gmail.com</a></p>
        <p><img className='home-footer-contact-icon' src={facebook} alt='icon facebook' /><a href='https://www.facebook.com/leselansloisir'> Facebook</a></p>
        <p><img className='home-footer-contact-icon' src={twitter} alt='icon twitter' /><a href='https://twitter.com/EGofficiel'> Twitter</a></p>
      </Col>
      <Col xs={12} md={6} className='home-footer-find'>
        <h3>Où nous trouver</h3>
        <p>Patinoire de Champigny sur Marne<br/>3, boulevard Jules Guesde<br/>94500 Champigny sur Marne</p>
      </Col>
    </Row>
  )
}

export default Footer
