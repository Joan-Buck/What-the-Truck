import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


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
                <Marker position={{ lat: foodTruck.lat, lng: foodTruck.long }} label={foodTruck.name}/>
                {/* <MarkerWit
              labelStyle={{ textAlign: "center", width:labelSize.width + 'px', backgroundColor: "#7fffd4", fontSize: "14px", padding:  labelPadding + "px"}}
              labelAnchor={{ x: (labelSize.width/2) + labelPadding , y: 80 }}
              key={place.id}
              position={{ lat: place.lat, lng: place.lng }}>
              <span>{place.name}</span>
            </MarkerWithLabel> */}
            </GoogleMap>

        </>
    )
}


export default Maps;
