import React from 'react'

import Equipe from '../components/Equipe'
import ClassementContainer from '../container/ClassementContainer'
import CompteRebours from '../components/CompteRebours'

const Home = () => {
  return (
    <section className='home'>
      <CompteRebours />
      <Equipe />
      <ClassementContainer />
    </section>
  )
}

export default Home
