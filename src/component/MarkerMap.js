import React, { Component } from 'react'
import { Marker, Popup } from 'react-leaflet'
import CustomGeoJSON from './CustomGeoJSON'
import {Button} from 'reactstrap'

const style = {color:'grey', fontSize:"0.8"};


export default class MarkerMap extends Component {

  state = {
    displayGeoJSON : false,
    data : {}
  }

  getRoute = async () => {
    let stationPoslat = this.props.stationPosition[0];
    let stationPoslong = this.props.stationPosition[1];
    let userPoslat = this.props.userPosition[0];
    let userPoslong = this.props.userPosition[1];
    try{
      const route = await fetch(`https://api.openrouteservice.org/directions?api_key=5b3ce3597851110001cf6248f62715d5c3ef44f68aaececa68efffca&coordinates=${userPoslong},${userPoslat}|${stationPoslong},${stationPoslat}&profile=foot-walking&format=geojson`)
      const dataJson = await route.json()
      this.setState({
        displayGeoJSON : !this.state.displayGeoJSON,
        data : dataJson
      })
      
    }
    catch(error){
      console.error(error);
    }
    
  }


  render() {
    return (
      <div>
        <Marker 
            position={this.props.stationPosition}
        >
          <Popup>
            <h1 style={style}><em>{this.props.stationName}</em></h1>
            <h3 style={style}>Vélos disponibles: <em style={{color:'#03a06c'}}>{this.props.availableBikes}</em></h3>
            <h3 style={style}>Emplacements libres: <em style={{color:'#03a06c'}}>{this.props.availablePlaces} 
                                                    /{this.props.totalPlaces}</em></h3>
            {this.state.displayGeoJSON && 
              <div style={{color:'#03a06c'}}>
                <p>Distance: {Math.round(this.state.data.features[0].properties.summary[0].distance)/1000} km</p>
                <p>Durée estimée: {Math.round(this.state.data.features[0].properties.summary[0].duration / 60)} mn</p>
              </div>
            }
            {this.props.userPosition &&
              !this.state.displayGeoJSON ? <Button onClick={this.getRoute.bind(this)}>S'y rendre</Button> : this.props.userPosition && <Button onClick={this.getRoute.bind(this)}>Annuler</Button>}
          </Popup>
        </Marker>
        {this.state.displayGeoJSON && <CustomGeoJSON data={this.state.data}/>}
        
      </div>

    )
  }
}
