import React, { useState } from 'react'

import Menu from './components/Menu'
import Intro from './components/Intro'
import Content from './Content'
import Footer from './components/Footer'

import backIntro from './img/backgrounds/elans_loisir_1920x500.jpg'
import backEquipe from './img/backgrounds/background_equipe_1920x977.jpg'

const App = (props) => {
  const [path, setPath] = useState(props.url.location.pathname)

  props.url.listen((location) => {
    return setPath(location.pathname)
  })

  let imgUrl = path === '/lequipe' ? backEquipe : backIntro

  return (
    <section className='App'>
      <header className='App-header'>
        <Menu pathname={props.url}/>
      </header>
      <Intro image={imgUrl} />
      <section className='App-container'>
        <Content />
      </section>
      <section className='grey'>
        <Footer />
      </section>
    </section>
  );
}

export default App;
