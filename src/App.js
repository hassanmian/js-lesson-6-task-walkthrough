import React from 'react';
import { useState } from 'react'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

import {Switch, Route, Link} from 'react-router-dom'

import { UserContext } from './contexts/UserContext'

function App() {

  let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("")

  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <UserContext.Provider value={{firstName, setFirstName, lastName, setLastName}}>
        <Switch>

          <Route path="/about">
            <AboutPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
      </UserContext.Provider>
      
      
    </div>
  );
}

export default App;
