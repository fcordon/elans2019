import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./pages/Home"
import CalendrierPage from "./pages/Calendrier"
import EquipePage from "./pages/Equipe"

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/calendrier' component={CalendrierPage}/>
      <Route exact path='/lequipe' component={EquipePage}/>
    </Switch>
  </main>
)

export default Main
