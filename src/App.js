import React, { Component } from 'react';
import './App.css';
import BikeMap from './component/BikeMap'
import About from './component/About'


//const fait = {color:'green'}
//const afaire = {color:'red'}

class App extends Component {



  render() {
    
    return (
      <div className="App">
        {/*<h1>TODO :</h1>
          <p style={fait}>Geolocalisation</p>
          <p style={fait}>Gestion erreur refus geolocalisation</p>
          <p style={fait}>Chemin, itinéraire jusqu'a une station / rue</p>
          
          <p style={afaire}>Recherche par nom de station</p>
          <p style={afaire}>Suppr chemin, itinéraire jusqu'a une station lorsqu'une autre est choisie</p>
          <p style={afaire}>Gérer les colors de mes components</p>
          <p style={afaire}>Au clic sur mon chemin -> Display temps et distance ou sans le clic</p>
          <p style={afaire}>Protect API KEYS in .env file</p>
        <p style={afaire}>Espace commentaire pour des suggestions d'amélioration de l'app, id et mail (optionnel) à renseigner</p>*/}
        <About/>
        <BikeMap   />
        <form>
          <input></input>
        </form>
      </div>
    );
  }
}

export default App;
