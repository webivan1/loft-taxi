export const actionAsyncMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action !== 'function') {
    return next(action)
  }

  return action(dispatch, getState)
}