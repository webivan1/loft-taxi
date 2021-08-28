export const localStorageMock = () => {
  let storage = {}

  return {
    getItem(key) {
      return storage[key]
    },
    setItem(key, value) {
      storage[key] = value
    },
    removeItem(key) {
      if (storage[key]) {
        delete storage[key]
      }
    },
    clear() {
      storage = {}
    }
  }
}