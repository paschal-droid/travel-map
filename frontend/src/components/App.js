import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import {Room } from "@material-ui/icons";
import axios from "axios";
import "./app.css";
import Info from './Card';

function App() {
    const currentUser = "Angela"
    const [pins, setPins]= useState([])
    const [currentPlace, setCurrentPlace]= useState(null)
    const [newPlace, setNewPlace] = useState(null)
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 46,
        longitude: 17,
        zoom: 4
      });


    const getPins = async () =>{
        try {
            const res = await axios.get("http://localhost:8800/map/pins");
            setPins(res.data);
        }catch(err) {
            console.log(err)
        }
    }

     useEffect(() => {
        getPins();
     }, [])

    const handleClick = (id, lat, long)=>{
        setCurrentPlace(id)
        setViewport({...viewport, latitutde:lat, longitude:long})
    }
    
    const handleAddClick = (e) => {
        const [long , lat] = e.lnglat;
        setNewPlace({lat, long,})
    }
    
    
    return (
        <div>
            <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}  onViewportChange={setViewport} 
                mapStyle="mapbox://styles/nechex/cku6edsj2353618o2kje0f9uk"
                onDblClick={handleAddClick}
                transitionDuration="200"
                >
                {pins.map((pin) => 
                    <>
                    
                <Marker key={pin._id} latitude={pin.lat} longitude={pin.long} offsetLeft={-viewport.zoom *3.5} offsetTop={-viewport.zoom *7}>
                <Room style={{color: pin.username === currentUser ? "green": "black", fontSize: viewport.zoom *7, cursor: "pointer"}} onClick={ () => handleClick(pin._id, pin.lat, pin.long)} />
                </Marker>
                {pin._id === currentPlace &&
               (<Popup
                latitude={pin.lat}
                longitude={pin.long}
                closeButton={true}
                closeOnClick={false}
                anchor="left"
                onClose={()=> setCurrentPlace(null)}>
                <Info pin={pin} />
                </Popup>
               )}
                </>
                )}
                {newPlace && (
                <Popup
                latitude={newPlace.lat}
                longitude={newPlace.long}
                closeButton={true}
                closeOnClick={false}
                anchor="left"
                onClose={()=> setNewPlace(null)}>Hello</Popup>)}
            </ReactMapGL>
        </div>
    )
}

export default App
