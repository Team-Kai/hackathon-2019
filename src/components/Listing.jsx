import React, { Component } from 'react'
import axios from 'axios'
import ModalForm from './partials/ModalForm'

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

    render() {
        return (

            
            <div className="container">
                {console.log(this.state.listing)}
                <div className="row">
                    <div className="col-md-8">
                        MAP
                    </div>
                    <div className="col-md-4">
                        {/* <img src={this.state.listing.images.picture_url} alt=""/> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        INFO AND SHIT
                        <p>{this.state.listing.neighborhood_overview}</p>
                    </div>
                    <div className="col-md-4">
                        <ModalForm />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        HOSTING INNFO
                        where from, date joined
                        personal reviews
                        response time
                        <button>contact host</button>
                    </div>
                </div>
                <div className="row">
                    POLICIES

                </div>
                <div className="row">
                    <div className="col-md-8">
                        Reviews
                        {this.showReviews()}
                        {/* {this.state.listing.reviews.map((review, i) => {
                            console.log(review.comments)
                            return <p>{review.comments}</p>
                        })} */}
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>

            </div>
        )
    }
}
