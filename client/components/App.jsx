import React from 'react'

import { Route, Switch } from 'react-router-dom'

import About from './About'
import Nav from './Nav'
import Shop from './Shop'

function App () {
  return (
    <>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/about" component={About}/>
          <Shop exact path="/shop" component={Shop} />
        </Switch>
      </div>
    </>
  )
}

export default App
