import React from 'react';
import { YMaps, Map, Placemark, Button } from '@pbe/react-yandex-maps';



import './YandexMap.css';
const YandexMap = ({ coordinatesX, coordinatesY }) => {

  // const center = [coordinatesX, coordinatesY];

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
          width='500px'
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
