import React, { Component } from 'react'
import { Route, Switch} from "react-router-dom";

import './App.scss';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import Listing from './components/Listing';
import Navigation from './components/partials/Navigation';

// import nmexico from './outfile-a_few.js';

export default class App extends Component {

  render() {
    // console.log(nmexico)
    return (
      <div className="App">
        
   
 <video controls autoplay muted loop id="myVideo">
   <source src="./assets/new-mexico--airbnb.mp4"
   type="video/mp4"></source>
   </video>

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


//html5 for video the tag is video// 