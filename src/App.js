import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home/Home'
import PeopleBrowser from './pages/people-browser/PeopleBrowser'
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/People' component={PeopleBrowser} />
        </Switch>
      </Router>
    );
  }
}

export default App;
