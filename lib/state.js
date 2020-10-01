const deepFreeze = (o) => {
  Object.freeze(o)

  Object.keys(o).forEach((key) => {
    if (
      o.hasOwnProperty(key) &&
      o[key] !== null &&
      (typeof o[key] === 'object' || typeof o[key] === 'function') &&
      !Object.isFrozen(o[key])
    ) {
      deepFreeze(o[key])
    }
  })

  return o
}

export default class Stater {
  constructor(initialStore = {}) {
    this.store = initialStore
    this.events = {}
  }

  init(initialStore) {
    this.store = { ...this.store, ...initialStore }
  }

  dispatch(eventName, payload) {
    if (typeof payload == 'function') payload = payload(this.store)

    if (Object.prototype.toString.call(payload) !== '[object Object]') {
      console.error('Payload should be an object')
      return false
    }

    if (!this.events.hasOwnProperty(eventName)) {
      console.error(`Event "${eventName}" does not exists`)
      return false
    }

    this.store = { ...this.store, ...payload }

    this.events[eventName].forEach(({ dep, cb }) => {
      if (dep.length == 0) cb(deepFreeze(this.store))
      else {
        const t = {}
        dep.forEach((k) => {
          if (this.store.hasOwnProperty(k)) t[k] = store[k]
        })

        cb(deepFreeze(t))
      }
    })
  }

  on(eventName, cb, dep = []) {
    if (typeof cb !== 'function') {
      console.error('on() method expects 2nd argument as a callback function')
      return false
    }

    if (Object.prototype.toString.call(dep) !== '[object Array]') {
      console.error('on() method expects 3nd argument as an array')
      return false
    }

    if (!this.events.hasOwnProperty(eventName)) this.events[eventName] = []

    this.events[eventName].push({ dep, cb })

    return true
  }
}
