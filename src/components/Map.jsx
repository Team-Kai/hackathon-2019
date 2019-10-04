import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
   static defaultProps = {
       center: {
           lat: 19.390519,
           lng: -99.4238064
       },
       zoom: 11
   };
   render() {
       return (
           <div style={{ height: '250px', width: '250px',"margin-top": "58px" }}>
               <GoogleMapReact
                   bootstrapURLKeys={{ key: "AIzaSyDVuL7jOejgzvj4LFPhT7Yqn1SxjghDwY0" }}
                   defaultCenter={this.props.center}
                   defaultZoom={this.props.zoom}
               >
               </GoogleMapReact>
           </div>
       );
   }
}
export default Map;