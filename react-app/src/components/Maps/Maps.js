import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';

const containerStyle = {
    width: '50%',
    height: '100%',
};


const Maps = ({ apiKey }) => {
    const center = {
        lat: 38.9072,
        lng: 77.0369,
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
                zoom={10}
            />
        </>
    )
}


export default Maps;
