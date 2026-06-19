import React, { useEffect, useRef, useState } from "react";
import {
  GeolocationControl,
  Map,
  Placemark,
  YMaps,
  ZoomControl,
  FullscreenControl
} from "@pbe/react-yandex-maps";
import { FieldProps } from "formik";
import {helpers, useStore} from "../../../services";

interface IYandexMap extends FieldProps {
  disabled?: boolean;
}

const YandexMap: React.FC<IYandexMap> = ({ field, form }) => {
  const [mapState, setMapState] = useState({
    center: [41.311081, 69.240562],
    zoom: 12
  });
  const {theme} = useStore()
  const geolocationRef = useRef<any>(null);

  const errorValue = helpers.getNestedValue(form.errors, field.name);
  const touchedError = helpers.getNestedValue(form.touched, field.name);

  const coordinates = field.value || { lat: null, long: null };
  console.log(coordinates);

  useEffect(() => {
    if (coordinates.lat && coordinates.long) {
      setMapState({
        center: [coordinates.lat, coordinates.long],
        zoom: 16
      });
    }
  }, [coordinates.lat, coordinates.long]);
  return (
    <div
      className={`flex flex-col gap-3  rounded-lg overflow-hidden [&_.ymaps-2-1-79-copyrights-pane]:!hidden [&_.ymaps-2-1-79-float-button]:!bg-blue-500 [&_.ymaps-2-1-79-float-button-icon]:!brightness-0 [&_.ymaps-2-1-79-float-button-icon]:!invert [&_.ymaps-2-1-79-zoom__icon]:!brightness-0 [&_.ymaps-2-1-79-zoom__icon]:!invert relative ${
        touchedError && errorValue ? "border-red-500 border" : ""
      }
      ${theme === 'dark' ? 'invert hue-rotate-180' : ''}
      `}
    >
      <YMaps

        query={{
          // Get your own key at https://developer.tech.yandex.ru/services/ and set VITE_YANDEX_MAPS_API_KEY
          apikey: import.meta.env.VITE_YANDEX_MAPS_API_KEY ?? "",
          lang: "ru_RU"
        }}
      >
        <Map state={mapState} width="100%" height="400px">
          {coordinates.lat && coordinates.long && (
            <Placemark
              geometry={[coordinates.lat, coordinates.long]}
              options={{
                preset: "islands#blueFactoryIcon",
                balloonAutoPan: true,
                draggable: true
              }}
              onDragEnd={(e: any) => {
                const coords = e.get("target").geometry.getCoordinates();
                const newCoordinates = {
                  lat: coords[0],
                  long: coords[1]
                };
                form.setFieldValue(field.name, newCoordinates);
              }}
            />
          )}
          <FullscreenControl />
          <ZoomControl
            options={{ position: { bottom: "100px", right: "10px" } }}
          />
          <GeolocationControl
            width={80}
            height={20}
            state={{
              enabled: true,
              selected: true
            }}
            instanceRef={(ref: any) => {
              if (ref) {
                geolocationRef.current = ref;
                ref.events.add("locationchange", (e: any) => {
                  const position = e.get("position");
                  if (position) {
                    const newCoordinates = {
                      lat: position[0],
                      long: position[1]
                    };
                    form.setFieldValue(field.name, newCoordinates);
                    setMapState({
                      center: position,
                      zoom: 16
                    });
                  }
                });
              }
            }}
            options={{
              float: "right",

              position: {
                bottom: "20px",
                right: "10px"
              }
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default YandexMap;
