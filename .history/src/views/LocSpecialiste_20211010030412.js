import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const position = {
  lat: -3.745,
  lng: -38.523
};

const onLoad = marker => {
    console.log('marker :', marker)
}

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyB1830VyrzSu9-UQ_TSbyOYuZ5EKP8zYKI"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={10}
      >
    <Marker 
        onLoad={onLoad}
        position={position}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)