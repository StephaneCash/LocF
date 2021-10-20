import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        return (
            <div className="mapContainer" style={{height: "90vh", width:"auto"}}>
                <Map google={this.props.google}
                    onClick={this.onMapClicked}>
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 
        (
            'AIzaSyB1830VyrzSu9-UQ_TSbyOYuZ5EKP8zYKI'
        )
})(MapContainer)