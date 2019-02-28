import React, { Component } from 'react'
import { GeoJSON, Popup } from 'react-leaflet'


export default class CustomGeoJSON extends Component {
  render() {
    console.log(this.props.data)
    return (
      <div>

      <GeoJSON data={this.props.data} > 
        <Popup>IGO</Popup>
      </GeoJSON>
      
      </div>
      
    )
  }
}
