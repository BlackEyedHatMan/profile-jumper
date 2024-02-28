import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Popup from './layout/popup/Popup'
import Settings from './layout/settings/Settings'

function App() {
  return (
    <React.Fragment>
        <Switch>
            <Route exact path="/">
                <Redirect to="/popup"/>
            </Route>
            <Route path="/popup" component={Popup}/>
            <Route path="/settings" component={Settings}/>
        </Switch>
    </React.Fragment>
  )
}

export default App
