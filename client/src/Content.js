import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./pages/Home"
import CalendrierPage from "./pages/Calendrier"
import EquipePage from "./pages/Equipe"
import StatsPage from "./pages/Stats"
import TopPage from "./pages/Top"

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/calendrier' component={CalendrierPage}/>
      <Route path='/lequipe' component={EquipePage}/>
      <Route path='/statistiques' component={StatsPage}/>
      <Route path='/top-five' component={TopPage}/>
    </Switch>
  </main>
)

export default Main
