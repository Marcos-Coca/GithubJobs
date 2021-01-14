import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'

export default function () {
  return (
   <BrowserRouter>
    <Switch>
        <Route path={['home', '/']} component={Home}/>
    </Switch>
   </BrowserRouter>
  )
}
