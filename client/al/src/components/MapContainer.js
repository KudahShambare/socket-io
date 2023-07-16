import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const MapContainer = (props)=>{


  const mapStyles = {
  width: '100%',
  height: '100%',

};


//location coordinates

const home = { lat: -33.913574382655355, lng: 18.54416017175219 }
const longBeach = {lat:-34.1237602, lng:18.3882942}
const willobridge ={lat:-33.870644,lng: 18.631594}
const blueMall ={lat:-34.062897, lng: 18.439676}




  return <div id="map">
   <Map
        google={props.google}
        zoom={9}
        style={mapStyles}
        initialCenter={{ lat:-33.918861, lng:18.423300 }}
      >

    <Marker
    title={'Adorable Legends Goodwood'}
       position={home} 

       onClick = {()=>{
        window.open("https://www.google.co.za/maps/place/Motion+Chef+Catering+CPT,+24+Kimberley+St,+Goodwood,+Cape+Town,+7459/@-33.9135955,18.5433528,19z/data=!4m6!3m5!1s0x1dcc5b4f70f5e3e5:0x302b2ee56497e04e!8m2!3d-33.91344!4d18.54412!16s%2Fg%2F11sfrtczl2")
       }}

        />

      
     <Marker
    title={'Long Beach Mall Craft Shop'}
    position={longBeach} 
 onClick = {()=>{
        window.open("https://www.google.co.za/maps/place/Longbeach+Mall/@-34.1239995,18.3859651,17z/data=!3m1!4b1!4m6!3m5!1s0x1dcc6afb22656ea7:0x192de08b37136537!8m2!3d-34.124004!4d18.3881538!16s%2Fg%2F11bvt3bc8v")
       }}
    />

     <Marker
    title={'Slow Market Willobridge Mall'}
    position={willobridge}
     onClick = {()=>{
        window.open("https://www.google.co.za/maps/place/Willowbridge+Slow+Market/@-33.8711339,18.631487,17z/data=!4m6!3m5!1s0x1dcc50b05a23022b:0x535e588206715e8d!8m2!3d-33.8712364!4d18.6314119!16s%2Fg%2F1td1yb9z")
       }}

     />

     <Marker
    title={'Gift Emporium Blue Route Mall'}
    position={blueMall}
      onClick = {()=>{
        window.open("https://www.google.co.za/maps/place/Blue+Route+Mall/@-34.0634623,18.4519079,17z/data=!3m1!4b1!4m6!3m5!1s0x1dcc418a554e7fd7:0x82c5818e358751b4!8m2!3d-34.0634668!4d18.4540966!16s%2Fg%2F124ydsk42")
       }}
     />


  
 



</Map>
      </div>
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDX1wAhSfIvb6bgxfnG9pPC5-pY7JULzuA'
})(MapContainer);