import React, { Component } from 'react'
import axios from 'axios'

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
      <div>
        {console.log(this.state.listings)}


        {this.state.listings.map((listing, i) => {
          return <h1>{listing.name}</h1>
        })}
      </div>
    )
  }
}
