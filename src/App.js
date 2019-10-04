import React, { Component } from 'react'
import { Route, Switch} from "react-router-dom";

import './App.scss';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import Listing from './components/Listing';
import Navigation from './components/Navigation';

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/listing/:id' component={Listing} />
            <Route path='/search' component={SearchResults} />
          </Switch>
        </div>
      </div>
    )
  }
}