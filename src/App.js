import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { API_KEYS } from './.env/apiKeys';

const API_GOOGLE_MAPS = API_KEYS.GOOGLE_MAPS;

const mapStyles = {
	width: '100%',
	height: '100%',
};

export class MapContainer extends Component {
	state = {
		showingInfoWindow: false, //Hides or the shows the infoWindow
		activeMarker: {}, //Shows the active marker upon click
		selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
	};

	render() {
		return (
			<Map
				google={this.props.google}
				zoom={14}
				style={mapStyles}
				initialCenter={{
					lat: -1.2884,
					lng: 36.8233,
				}}
			/>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: `${API_GOOGLE_MAPS}`,
})(MapContainer);
