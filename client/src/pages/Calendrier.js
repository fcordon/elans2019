import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Intro from '../components/Intro'
import CompteRebours from '../components/CompteRebours'
import Calendrier from '../components/Calendrier'
import Footer from '../components/Footer'

const CalendrierPage = () => {
  const getCalendrier = async () => {
    const response = await axios.get('/calendrier')
    const body = await response.data

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  const [calendrier, setCalendrier] = useState([])

  useEffect(() => {
    getCalendrier()
    .then(res => setCalendrier(res))
    .catch(err => console.log(err))
  }, [])

  return (
    <section className='home'>
      <Intro />
      <CompteRebours />
      {calendrier.map((data, i) => <Calendrier key={i} {...data} place={i} />)}
      <section className='grey'>
        <Footer />
      </section>
    </section>
  )
}

export default CalendrierPage
