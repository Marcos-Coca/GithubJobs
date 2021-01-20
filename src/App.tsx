import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function () {
  return (
   <BrowserRouter>
    <Switch>
        <Route path={['home', '/']} component={Home}/>
    </Switch>
   </BrowserRouter>
  )
}
