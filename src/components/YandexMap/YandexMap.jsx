import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark, } from '@pbe/react-yandex-maps';

import './YandexMap.css';
const YandexMap = ({ coordinatesX, coordinatesY, relationWidht }) => {

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
        <Map
          defaultState={
            {
              center: [coordinatesX, coordinatesY],
              zoom: 16,
              controls: ["zoomControl", "fullscreenControl"],
            }
          }
          width={mapWidth}
          height='240px'
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
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
