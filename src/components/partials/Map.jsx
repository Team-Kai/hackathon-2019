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
           <div style={{ "align-self": "flex-right", height: '100vh', width: '100%',"margin-top": "56px" }}>
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