import React from 'react';
import { GoogleMap, Marker, useJsApiLoader, InfoWindow} from '@react-google-maps/api';


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
                <Marker position={{ lat: foodTruck.lat, lng: foodTruck.long }}
                // label={foodTruck.name}
                />
                {/* <InfoWindow
                    position={{ lat: Number(foodTruck.latitude), lng: Number(foodTruck.longitude) }} >
                    <div>
                        <div>{foodTruck.name}</div>
                    </div>
                </InfoWindow> */}
            </GoogleMap>

        </>
    )
}


export default Maps;
