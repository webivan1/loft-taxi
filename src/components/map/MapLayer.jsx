import { makeStyles } from '@material-ui/core/styles'
import mapbox from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useMap } from './useMap'
import { useRoute } from './useRoute'

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

export const MapLayer = () => {
  const classes = useStyles()
  const { map, mapContainer } = useMap()
  useRoute(map)

  return <div ref={mapContainer} className={classes.root}/>
}