import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SmallListing extends Component {
  render() {
    return (
            <Link to={`/listing/${this.props.listing.id}`}>              
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-8">
                <div class="card-body">
                <p class="card-text"><small class="text-muted">{this.props.listing.host.host_location}</small></p>
                <h5 class="card-title">{this.props.listing.name}</h5>
                <p class="card-text">{this.props.listing.accommodates} Guests - {this.props.listing.bedrooms} Bedrooms - {this.props.listing.bathrooms} Bathrooms</p>
                <p class="card-text"></p>
                <p class="card-title">${this.props.listing.price}/night</p>
              </div>
            </div>
            <div class="col-md-4">
              <img src={this.props.listing.images.picture_url} class="card-img" alt="..." />
            </div>
          </div>
        </div>
              </Link>
    )
  }
}
