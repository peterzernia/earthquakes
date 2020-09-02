// eslint-disable-next-line import/no-extraneous-dependencies
import fetch from 'isomorphic-fetch'
import { getEarthquakeData } from './api'
import { EarthquakeData } from '../types'
import { MONTH } from '../containers/Home'

// use isomorphic-fetch instead of jsdom polyfill for the test
global.fetch = fetch

// test that the usgs endpoint is returning data
test('getEarthquakeData', async () => {
  let data: EarthquakeData

  const res = await getEarthquakeData(MONTH)

  if (res.ok) {
    data = await res.json()
  }

  expect(data).toBeDefined()
})
