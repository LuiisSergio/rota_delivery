import React, { useEffect, useState } from 'react';
import { GOOGLEAPIKEY } from '../Util/defines'
import './main.css';
import { GoogleMap, LoadScript, MarkerClusterer, Marker, InfoBox, InfoWindow } from '@react-google-maps/api'
import { getUserRestLocation, RELOAD_MAP, AUTO_RELOAD_MAP } from '../Util/defines'
import { getRestId } from '../Util/storage';
import { IonButton } from '@ionic/react';

let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 30
  });
}

const containerStyle = {
  width: '100%',
  height: '75vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Maps() {
  const [map, setMap] = React.useState(null);
  const [locations] = React.useState([{"title": String(), "lat": Number(), "lng": Number()}]);
  const [selectedCenter, setSelectedCenter] = useState(null);

  
  useEffect(() => {
    getLocations();
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  function reloadPage (){
    window.location.reload()
  }

  if(AUTO_RELOAD_MAP){
    setInterval(function() {
      reloadPage();
    }, RELOAD_MAP); 
  }
  
  const  getLocations = () => {
    locations.shift()
    var request = new XMLHttpRequest();
    request.open('GET', getUserRestLocation(String(getRestId())), false);  // `false` makes the request synchronous
    request.send(null);
    let location = JSON.parse(request.responseText);
    var count = Object.keys(location);
    let obj;
    for (let i = 0; i< count.length; i ++){
      obj = {title: location[i].name, lat: Number(location[i].latitude), lng: Number(location[i].longitude)}
      locations.push(obj); 
    }
  }

  const options = {
   
  }
  
  function createKey(location: any) {
    return location.lat + location.lng
  }
  
  
  
  return (
    <div className="mapConfig">      
      <LoadScript
        googleMapsApiKey={GOOGLEAPIKEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          
          <MarkerClusterer options={options} 
            imagePath={"../image"}
            imageExtension={"png"}
          >
            {(clusterer: any) =>
              locations.map((location) => (
                <Marker key={createKey(location)} position={location} clusterer={clusterer} 
                  
                />
                
                
              ))
            }
          </MarkerClusterer>
        
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
          
        </GoogleMap>
      </LoadScript>
      <div className="mapButton">
        <IonButton onClick={reloadPage}>RELOAD</IonButton>
      </div>
    </div>
  )
}

export default React.memo(Maps)