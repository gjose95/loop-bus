import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
// import React, { useRef, useEffect, useState } from 'react';

import loopData from "../lib/loop_data.json";

function nextBus(times) {
  let returnTime = times[0];

  const initialTime = times[0];
  const initialTimeH = initialTime.split(":")[0];
  const initialTimeM = initialTime.split(":")[1];
  let initialTimeT = (parseInt(initialTimeH) * 60) + parseInt(initialTimeM);

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const totalMins = (hours * 60) + minutes;

  for (let index = 1; index < times.length; index++) {
    const time = times[index];
    const timeH = time.split(":")[0];
    const timeM = time.split(":")[1];
    const timeT = (parseInt(timeH) * 60) + parseInt(timeM);
    if (totalMins < timeT && timeT > initialTimeT) {
      returnTime = times[index];
      initialTimeT = timeT;
    }
  }
  return returnTime;
}

function Main() {
  const position = [40.87364,-73.62323]; // [latitude, longitude]
  const zoomLevel = 14;

  console.log('loopData :>> ', loopData);
  return <div className="map-body">
    <MapContainer
        center={position}
        zoom={zoomLevel}
        scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
      />
      {loopData.stops.map((stop,i)=>(
        <Marker key={"stop"+i} position={stop.position}>
          <Popup>
            {stop.name}
            <br />
            <b>Next Bus: {nextBus(stop.times)} </b>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
}
export default Main;