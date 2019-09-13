import React from 'react'

import Intro from '../components/Intro'
import CompteRebours from '../components/CompteRebours'
import Equipe from '../components/Equipe'
import ClassementContainer from '../container/ClassementContainer'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <section className='home'>
      <Intro />
      <CompteRebours />
      <Equipe />
      <ClassementContainer />
      <div className='grey'>
        <Footer />
      </div>
    </section>
  )
}

export default Home
