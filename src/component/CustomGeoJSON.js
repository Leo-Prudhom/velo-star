import React, { Component } from 'react'
import { GeoJSON, Popup } from 'react-leaflet'


export default class CustomGeoJSON extends Component {
  render() {
    console.log(this.props.data)
    return (
      <div>

      <GeoJSON data={this.props.data} > 
        <Popup>
        <p>Distance: {Math.round(this.props.data.features[0].properties.summary[0].distance)/1000} km</p>
        <p>Durée estimée: {Math.round(this.props.data.features[0].properties.summary[0].duration / 60)} mn</p></Popup>
      </GeoJSON>
      
      </div>
      
    )
  }
}
