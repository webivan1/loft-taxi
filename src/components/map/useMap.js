import { useEffect, useRef } from 'react'
import mapbox from 'mapbox-gl'

mapbox.accessToken = process.env.REACT_APP_MAPBOX_API_KEY

export const useMap = () => {
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    if (!map.current) {
      map.current = new mapbox.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [30.0164037, 59.8658356],
        zoom: 9
      })

      return () => {
        map.current.remove()
      }
    }
  }, [false])

  return { map: map?.current, mapContainer }
}