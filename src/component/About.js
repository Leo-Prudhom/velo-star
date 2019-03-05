import React, { Component } from 'react'
import starBanner from '../img/velostar.jpg'
import {Row, Col, Container} from 'reactstrap'

const h1Style = {
  color : "#444040",
  textAlign : "justify",
  marginLeft : '5%'
}

export default class About extends Component {
  render() {
    return (
      <section>
        <div id="bannerTextBloc" style={{paddingBottom:'5%', paddingTop:'5%', position:'absolute', top:'0', zIndex:'100', background:'rgba(255,255,255,0.6)', width:'100%'}}>
          <h1 style={h1Style}><em style={{color:"#d14a21"}}>EXPLOREZ</em> la ville au guidon d'un vélo en libre service velostar !</h1>
          <h1 style={h1Style}><em style={{color:"#d14a21"}}>PROFITEZ</em> des données en temps réel de la station vélo la plus proche !</h1>
          <h1 style={h1Style}><em style={{color:"#d14a21"}}>DÉCOUVREZ</em> cette application et n'hésitez pas à me contacter !</h1>
        </div>
        <img src={starBanner} style={{width:"100%"}} alt='velos à rennes' title="Bannière du site, vélos à rennes"/>

        <div style={{background:"#eee", color:'#3a3a3a', paddingTop:'10%', paddingBottom:'10%'}}>
          <h1 style={{textAlign:'center'}}>À PROPOS DE CETTE APPLICATION</h1>
          <hr></hr>

            <Container>
              <Row xs="12">

              <Col xs="6" >
                <h3  style={{textAlign:'center'}}>Le but / les fonctionnalités</h3><br></br>

                <p style={{textAlign:'justify'}}>Cette application s'adresse aux usagers du service de vélo libre de la ville de rennes
                , mon but est ici de permettre à un usager de connaître l'état d'une station en temps réél. Quel intérêt ? Vous en avez assez 
                de vous déplacer jusqu'à une station vélostar pour vous apercevoir qu'il ne reste plus aucun vélo ? Vous appréhendez de ramener
                 votre vélostar dans le centre, ou les emplacements peuvent êtres tous pris ? Grâce à cette application, vous avez 
                 accès aux données de chaque station vélo de Rennes Métropole, vous pouvez ainsi anticiper ces déplacements qui ne font que 
                 vous retarder. <br></br>
                 Si vous avez des suggestions / recommendations / idées d'améliorations, n'hésitez pas à m'en faire part. Sur mon LinkedIn -> Léo Prud'hom
                </p>
              </Col>

              <Col xs="6">
                <h3  style={{textAlign:'center'}}>Comment ça marche?</h3><br></br>
                <p>Cette partie se penche sur l'aspect technique et les moyens utilisés pour réaliser cette application. 
                Cette app est réalisée en React.js, au chargement de la page, tous les composants (éléments de page) sont chargés, parmis lesquels 
                certains font appels à une ou plusieurs APIs.
                  <ul>
                    <li>dataExplore : Donne les infos sur les stations et les coordonnées géographiques de chacunes.</li>
                    <li>react-leaflet : Permet d'afficher la carte et de placer des marqueurs à chaque coordonnée pour chaque station.</li>
                    <li>open-route-service : Affiche l'itinéraire sur la carte jusqu'à une station choisie.</li>
                    </ul>
                </p>
              </Col>
              
              </Row>
              <hr></hr>
              <Row>
                <Col xs="12">
                  <h3 style={{textAlign:'center'}}>Les fonctionnalités à venir si l'application fonctionne bien</h3><br></br>
                  <p>Rechargement asynchrone toutes les 3 secondes pour actualiser la position de l'utilisateur</p>
                  <p>Affichage de l'itinéraire, déjà présent dans les données que je récupère mais en Anglais. Possible de traduire les directions ou de les afficher avec des symboles (ex : turn right en instruction afficherai une fleche à droite)</p>
                  <p>Itinéraire en direct avec rechargement asynchrone, comme pour l'itinéraire de googleMap, sans assistant vocal (évidemment)</p>
                  <p>Champs de recherche par nom de station, d'une rue à une station ou depuis la position de l'utilisateur</p>
                  <p>Amélioration du visuel (UX, UI) et adaptation full responsive.</p>
                </Col>
              </Row>
            </Container>

            
        </div>
      </section>
    )
  }
}
