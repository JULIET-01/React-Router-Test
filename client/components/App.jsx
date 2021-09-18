import React from 'react'

import { Route, Switch } from 'react-router-dom'

import About from './About'
import Nav from './Nav'
import Weather from './Weather'
import Footer from './Footer'
import WeekDayWeather from './WeekDayWeather'

function App () {
  return (
    <>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/weather/:week" componenet={WeekDayWeather} />
        </Switch>
        <Footer />
      </div>
    </>
  )
}

export default App
