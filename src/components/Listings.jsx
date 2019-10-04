import React, { Component } from 'react'
import axios from 'axios'
import SmallListing from './partials/SmallListing'
import Map from './partials/Map';

export default class Listings extends Component {

  state = {
    listings: []
  }

  componentDidMount() {
    axios.get('https://ironhackathon4.herokuapp.com/api').then(listings => {
      this.setState({
        listings: listings.data
      })
    })
  }



  render() {
    return (
      <div className="container">
        <div className="row">

        <div className="col-md-8">
          <h1>100+ Places to stay</h1>
        {this.state.listings.map((listing, i) => {
          return <SmallListing listing={listing} key={i}/>
        })}
        </div>
        <div className="col-md-4">
          <Map />
        </div>
        {console.log(this.state.listings)}
        </div>



      </div>
    )
  }
}
