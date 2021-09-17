export const getStartRoute = state => state.route.address.start
export const getFinishRoute = state => state.route.address.finish

export const getStartRoutes = state => {
  return state.address.list.map(name => ({
    name,
    disabled: name === getFinishRoute(state)
  }))
}

export const getFinishRoutes = state => {
  return state.address.list.map(name => ({
    name,
    disabled: name === getStartRoute(state)
  }))
}