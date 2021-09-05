import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useRoute = (map) => {
  const { map: coords } = useSelector(({ route }) => route)

  useEffect(() => {
    if (map) {
      removeRoute(map)

      if (Array.isArray(coords) && coords.length > 0) {
        drawRoute(map, coords)
      }
    }
  }, [coords])
}

function removeRoute(map) {
  if (map.getLayer('route')) {
    map.removeLayer('route')
  }

  if (map.getSource('route')) {
    map.removeSource('route')
  }

  map.flyTo({
    center: [30.0164037, 59.8658356],
    zoom: 9
  })
}

function drawRoute(map, coordinates) {
  map.flyTo({
    center: coordinates[0],
    zoom: 15
  })

  map.addSource('route', {
    type: 'geojson',
    data: {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates
      }
    }
  })

  map.addLayer({
    id: 'route',
    type: 'line',
    source: 'route',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': '#ffc617',
      'line-width': 8
    }
  })
}