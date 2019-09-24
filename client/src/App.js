import React from 'react'

import Menu from './components/Menu'
import Content from './Content'

const App = () => {
  return (
    <section className='App'>
      <header className='App-header'>
        <Menu />
      </header>
      <section className='App-container'>
        <Content />
      </section>
    </section>
  );
}

export default App;
