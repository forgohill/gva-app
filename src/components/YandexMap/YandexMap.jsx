import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark, Button } from '@pbe/react-yandex-maps';



import './YandexMap.css';
const YandexMap = ({ coordinatesX, coordinatesY, relationWidht }) => {

  // const center = [coordinatesX, coordinatesY];



  const [mapWidth, setMapWidth] = useState(null);

  useEffect(() => {
    if (relationWidht >= 1024) {
      setMapWidth(634)
    } else if (relationWidht < 1024 && relationWidht > 475) {
      setMapWidth(475)
    } else if (relationWidht <= 475) {
      setMapWidth(320)
    }
  }, [relationWidht]);


  return (
    <div>
      <YMaps>

        {/* <button
          onClick={() => {
            console.log(coordinatesX);
            console.log(coordinatesY);
            // console.log(center);
          }}
        >coordinates</button> */}

        {/* <div>My awesome application with maps!</div> */}
        <Map
          defaultState={
            {
              center: [coordinatesX, coordinatesY],
              zoom: 16,
              controls: ["zoomControl", "fullscreenControl"],

            }}
          // width='500px'
          width={mapWidth}

          height='240px'
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          {/** Props <Button/>
           * data: Control data
           * defaultData: Uncontrolled control data
           * options: Control options
           * defaultOptions: Uncontrolled control options
           * state: Control state
           * defaultState: Uncontrolled control state
           * instanceRef: Object instance
           */}
          {/* 
          <Button
            onClick={() => {
              console.log('Забронирвоать!');
            }}
            options={{ maxWidth: 128 }}
            data={{ content: "Забронировать!" }}
            defaultState={{ selected: true }}
          />
 */}
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[coordinatesX, coordinatesY]}
            properties={{
              balloonContentBody:
                "This is balloon loaded by the Yandex.Maps API module system",
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
}

export default YandexMap;
