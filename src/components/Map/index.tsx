import React from 'react'
import {
  Map as Leaflet, TileLayer, CircleMarker, Popup,
} from 'react-leaflet'
import { Earthquake } from '../../types'
import './Map.css'

type Props = {
  earthquakes: Earthquake[];
}

const CENTER: [number, number] = [30, 0]

export default function Map(props: Props) {
  const { earthquakes } = props

  // Markers for each earthquake
  const markers = earthquakes?.map((e) => {
    const lat = e.geometry.coordinates[1]
    const lng = e.geometry.coordinates[0]
    const center: [number, number] = [lat, lng]

    // The radius is determined by the magnitude
    // of the earthquake. The larger the magnitude,
    // the larger the circle.
    const radius = 1 + (1.1 * e.properties.mag)

    return (
      <CircleMarker
        key={e.id}
        center={center}
        radius={radius}
        color="red"
      >
        <Popup>
          <a href={e.properties.url} target="_blank" rel="noopener noreferrer">
            {e.properties.title}
          </a>
        </Popup>
      </CircleMarker>
    )
  })

  return (
    <div className="map-container">
      <Leaflet
        center={CENTER}
        className="map"
        minZoom={2}
        zoom={2.4}
        zoomControl={false}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </Leaflet>
    </div>
  )
}
