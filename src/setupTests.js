// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { localStorageMock } from './tests/utils/localStorage'

if (typeof window.URL.createObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'createObjectURL', { value: () => {} })
}

jest.mock('mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: (() => {
    const map = function() { }

    map.prototype.addControl = jest.fn()
    map.prototype.on = jest.fn()
    map.prototype.remove = jest.fn()

    return map
  })(),
  NavigationControl: jest.fn(),
}))

window.localStorage = localStorageMock;