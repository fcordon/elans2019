import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Intro from '../components/Intro'
import CompteRebours from '../components/CompteRebours'
import Equipe from '../components/Equipe'
import ClassementContainer from '../container/ClassementContainer'

const Home = () => {
  const getSchedule = async () => {
    const response = await axios.get('/calendrier')
    const body = await response.data

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  const [todayDate] = useState(new Date())
  const [gameArray, setGameArray] = useState([])

  useEffect(() => {
    let dateArray = []
    let gameDate = todayDate.getTime()

    getSchedule()
    .then(res => {
      res.map((data) => {
        let nextGame = new Date(data.gameDate).getTime()

        if(nextGame - gameDate > 0) {
          dateArray.push(nextGame)
        }

        return setGameArray(dateArray)
      })
    })
    .catch(err => console.log(err))
  }, [todayDate])

  return (
    <section className='home'>
      <Intro />
      <CompteRebours gameDate={gameArray[0]} />
      <Equipe />
      <div className='grey'>
        <ClassementContainer />
      </div>
    </section>
  )
}

export default Home
