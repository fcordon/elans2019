import React from 'react'

import Equipe from '../components/Equipe'
import ClassementContainer from '../container/ClassementContainer'

const Home = () => {
  return (
    <section className='home'>
      <Equipe />
      <ClassementContainer />
    </section>
  )
}

export default Home
