import React from 'react'
import { TopNavbar } from './components/TopNavbar';
import './Css//App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Home} from './pages/Home'
import { NavBar } from './components/NavBar';


export const App = () => {
  return(
    <div className="app-container">
      <TopNavbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch> 
        <NavBar/>
      </Router>
    </div>
  )
}
 