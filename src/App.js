import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import React, { Component } from 'react';

import { API_KEYS } from './.env/apiKeys';
import { CurrentLocation } from './Map';

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

	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true,
		});

	onClose = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null,
			});
		}
	};

	render() {
		return (
			<CurrentLocation centerAroundCurrentLocation google={this.props.google}>
				<Marker onClick={this.onMarkerClick} name={'current location'} />
				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
					onClose={this.onClose}
				>
					<div>
						<h4>{this.state.selectedPlace.name}</h4>
					</div>
				</InfoWindow>
			</CurrentLocation>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: `${API_GOOGLE_MAPS}`,
})(MapContainer);
