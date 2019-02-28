import React, { Component } from 'react'
import { Map, Popup, TileLayer, CircleMarker } from 'react-leaflet'
import MarkerMap from './MarkerMap'

const position = [48.11, -1.6777926];


export default class BikeMap extends Component {

  state = {
    stations : [],
    userLocation : ''
  }

  async componentDidMount () {
    let data = '';


    try{
      await navigator.geolocation.getCurrentPosition( location => {

        const currentLocation = [location.coords.latitude, location.coords.longitude]
        this.setState({
          userLocation : currentLocation
        })
      });

      const api_call = await fetch('https://data.explore.star.fr/api/records/1.0/search/?dataset=vls-stations-etat-tr&rows=55');
      data = await api_call.json();
    }
    catch{
      const err = {msg : "error"}
      data = err.json()
    }
    
    this.setState({
      stations : data.records
    })
  }

    
  render() {
    return (
      <Map center={this.state.userLocation ? this.state.userLocation : position} zoom={15} style={{height:"600px"}}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />

    {this.state.stations.map(
      station => {
        return <MarkerMap 
        key = {station.fields.idstation}
                  userPosition = {this.state.userLocation}
                  stationPosition={[station.geometry.coordinates[1], station.geometry.coordinates[0]]}
                  stationName = {station.fields.nom}
                  availableBikes = {station.fields.nombrevelosdisponibles}
                  availablePlaces = {station.fields.nombreemplacementsdisponibles}
                  totalPlaces = {station.fields.nombreemplacementsactuels}
                />
                }
    )}

    {this.state.userLocation &&
      <CircleMarker
        center={this.state.userLocation}
        radius='10'
        color='#03a06c'
        fillOpacity='0.8'
      >
      <Popup>Vous êtes ici</Popup>
      </CircleMarker>

    }


  </Map>

    )
  }
}
