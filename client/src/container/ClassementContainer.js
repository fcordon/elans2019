import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Classement from '../components/Classement'

const ClassementContainer = () => {

  const getClassement = async () => {
    const response = await axios.get('/classement')
    const body = await response.data

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  const [classement, setClassement] = useState([])

  useEffect(() => {
    getClassement()
    .then(res => setClassement(res))
    .catch(err => console.log(err))
  }, [todayDate])

  return (
    <section className='home-classment'>
      {classement.map((data, i) => <Classement key={i} {...data} place={i} />)}
    </section>
  )
}

export default ClassementContainer
