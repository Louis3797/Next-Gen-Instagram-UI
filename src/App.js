import React from 'react'
import { TopNavbar } from './components/TopNavbar';
import './Css//App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Home} from './pages/Home'


export const App = () => {
  return(
    <React.Fragment>
      <TopNavbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}
 