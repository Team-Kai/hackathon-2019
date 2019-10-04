import React, { Component } from 'react'
import axios from 'axios'
import ModalForm from './partials/ModalForm'
import Map from './Map'

export default class Listing extends Component {
    state = {
        listing: []
    }

    componentDidMount() {
        // Doesn't end with -Airbnb for listing pages
        document.title = "Sweet Little Room near St Martin Canal - Boutique hotels for Rent in Paris"; 
        axios.get(`https://ironhackathon4.herokuapp.com/api/${this.props.match.params.id}`).then(data => {
            this.setState({
                listing: data.data[0]
            })
        })
      }


    showInfo = () => {
        if(this.state.listing){
            return <div>
                <h1>{this.state.listing.name}</h1>
                <p class="card-text">{this.state.listing.accommodates} Guests - {this.state.listing.bedrooms} Bedrooms - {this.state.listing.bathrooms} Bathrooms</p>
                <p>{this.state.listing.description}</p>
            </div>
        }
    }

    showReviews = () => {
        if(this.state.listing.reviews){
            return this.state.listing.reviews.map((review, i) => {

                return <div class="card">
                    <p>{review.reviewer_name}</p>
                    <p>{review.comments}</p>
                </div>

            })
        }
    }  


    showHost = () => {
        if (this.state.listing.host) {
            return <div>
                <p>{this.state.listing.host.host_name}</p>
                <img src={this.state.listing.host_thumbnail_url} alt=""/>
            </div>
        }
    }

    showImage = () => {
        if (this.state.listing.images) {
            return <img src={this.state.listing.images.picture_url} alt=""/>
        }
    }

    showAmenitites = () => {
        if (this.state.listing.amenities) {
            return this.state.listing.amenities.map((feature, i) => {
               return  <li>{feature}</li>
            })
        }
    }

    render() {
        return (
            <div className="container white">
                {console.log(this.state.listing)}
                <div className="row white">
                    <div className="col-md-8">
                        <Map />
                    </div>
                    <div className="col-md-4">
                        {this.showImage()}
                    </div>
                </div>
                <div className="row white">
                    <div className="col-md-8">
                        {this.showInfo()}
                        <h5>Neighborhood</h5>
                        <p>{this.state.listing.neighborhood_overview}</p>
                    </div>
                    <div className="col-md-4">
                        <ModalForm />
                    </div>
                </div>
                <div className="row white">
                    <div className="col-md-8">
                        {this.showHost()}
                        <button>contact host</button>
                    </div>
                </div>
                <div className="row white">
                    Ammenitites
                    <ul>
                    {this.showAmenitites()}
                    </ul>
                </div>
                <div className="row white">
                    <div className="col-md-8">
                        Reviews
                        {this.showReviews()}
                    </div>
                    <div className="col-md-4 white">

                    </div>
                </div>

            </div>
        )
    }
}
