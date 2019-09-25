import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./pages/Home"
import CalendrierPage from "./pages/Calendrier"

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/calendrier' component={CalendrierPage}/>
    </Switch>
  </main>
)

export default Main
