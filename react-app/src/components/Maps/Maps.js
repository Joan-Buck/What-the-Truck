import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';

const containerStyle = {
    width: '100%',
    height: '100%',
};


const Maps = ({ apiKey, foodTruck }) => {
    const center = {
        lat: foodTruck.lat,
        lng: foodTruck.long,
    }
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    return (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}>
                <Marker position={{ lat: foodTruck.lat, lng: foodTruck.long }}/>
            </GoogleMap>

        </>
    )
}


export default Maps;
