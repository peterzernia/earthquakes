import { Period } from '../types'

// documentation - https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
// eslint-disable-next-line import/prefer-default-export
export const getEarthquakeData = (period: Period) => fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_${period}.geojson`)
