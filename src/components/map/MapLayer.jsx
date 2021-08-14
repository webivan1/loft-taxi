import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    zIndex: 0,
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
})

export const MapLayer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} />
  )
}