import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
    return (
        <GoogleMap
            defaultZoom={10} defaultCenter={{ lat: -4.441931, lng: 15.266293 }}
        />
    );
}

const WrapperMap = withScriptjs(withGoogleMap(Map));


export default function LocSpecialiste() {
    return (
        <div style={{ width: "80%", height: "100vh" }}>
            <WrapperMap
                googleMapURL={`http://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry, drawing, places`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    );
}