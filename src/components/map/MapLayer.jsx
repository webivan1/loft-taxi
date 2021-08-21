import { useEffect, useRef, memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import mapbox from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapbox.accessToken = process.env.REACT_APP_MAPBOX_API_KEY

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    zIndex: 0,
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
})

export const MapLayer = memo(() => {
  const classes = useStyles()
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
  }, [map.current])

  return (
    <div ref={mapContainer} className={classes.root}/>
  )
})