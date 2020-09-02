import React from 'react'
import { getEarthquakeData } from '../../utils/api'
import { EarthquakeData, Period } from '../../types'
import Button from '../../components/Button'
import Loader from '../../components/Loader'
import Map from '../../components/Map'
import './Home.css'

export const DAY = 'day'
export const WEEK = 'week'
export const MONTH = 'month'

export default function Home() {
  const [data, setData] = React.useState<EarthquakeData>({} as EarthquakeData)
  const [period, setPeriod] = React.useState<Period>(DAY)
  const [error, setError] = React.useState(false)

  const n = data?.features?.length

  const handleClick = (p: Period) => {
    if (p !== period) {
      setData({} as EarthquakeData)
      setPeriod(p)
    }
  }

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await getEarthquakeData(period)

        if (res.ok) {
          const d = await res.json()
          setData(d)
        }
      } catch {
        setError(true)
      }
    }

    fetchData()
    // refetch data anytime the period changes
  }, [period])

  if (error) {
    return <div>Oops! Something went wrong. Please try again.</div>
  }

  return (
    <div className="home">
      <h1>{`USGS All Earthquakes, past ${period}`}</h1>
      <div>{n ? `${n} earthquakes` : '\u00A0'}</div>
      {!data?.features?.length && <div className="home-loader"><Loader /></div>}
      <Map earthquakes={data?.features} />
      <div>
        <Button onClick={() => handleClick(DAY)}>
          Past Day
        </Button>
        <Button onClick={() => handleClick(WEEK)}>
          Past Week
        </Button>
        <Button onClick={() => handleClick(MONTH)}>
          Past Month
        </Button>
      </div>
    </div>
  )
}
