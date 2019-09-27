import React from 'react'

import Menu from './components/Menu'
import Intro from './components/Intro'
import CompteRebours from './components/CompteRebours'
import Content from './Content'
import Footer from './components/Footer'

const App = () => {
  return (
    <section className='App'>
      <header className='App-header'>
        <Menu />
      </header>
      <Intro />
      <CompteRebours />
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
