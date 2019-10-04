import React, { Component } from 'react'
import GoogleMapReact from 'react-google-map'

export default class Map extends Component {
    render() {
        return (
            <div className="gmap">
                <div style={{ "align-self": "flex-right", height: '250px', width: '250px' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}
