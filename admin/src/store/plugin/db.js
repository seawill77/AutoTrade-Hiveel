/**
 * todo 与store.state.me 绑定过强，考虑分离
 */
import wait from '@/fn/util/wait'
export default store => {
  Object.keys(store.state).filter(k => store.state[k].db).forEach(async k => {
    await wait(10)
    await Db.open()
    let data = await Db.get(`${store.state['me'].user.id}.${k}`)
    if (!data) return
    store.state[k] = data
  })

  store.subscribe((mutation, state) => {
    let module = mutation.type.substring(0, mutation.type.indexOf('/'))
    if (!state[module].db) return
    if (mutation.payload === 'REMOVE') {
      Db.remove(`${state['me'].user.id}.${state[module]}`)
      return
    }
    Db.set(store.state['me'].user.id + '.' + module, state[module])
  })
}

class Db {
  static set(k, v) {
    let request = this.store(this._name, true).put({ k, v })
    request.onsuccess = (event) => {
    }
  }
  static async get(k) {
    return new Promise((resolve, reject) => {
      let request = this.store(this._name, true).get(k)
      request.onsuccess = (event) => {
        resolve(request.result ? request.result['v'] : null)
      }
    })
  }
  static async remove(k) {
    let request = this.store(this._name, true).delete(k)
    request.onsuccess = (event) => {
    }
  }
  static clear() {
    this._db.store(this._name).clear()
  }
  static store(store, write) {
    return this._db.transaction(store, write ? 'readwrite' : 'readonly').objectStore(store)
  }

  static async open() {
    if (this._db) {
      return this._db
    }

    return new Promise((resolve, reject) => {
      let DBOpenRequest = indexedDB.open(this._name, 1)
      DBOpenRequest.onsuccess = () => {
        this._db = DBOpenRequest.result
        resolve()
      }
      DBOpenRequest.onupgradeneeded = (event) => {
        let db = event.target.result
        let objectStore = db.createObjectStore(this._name, { keyPath: 'k' })
        objectStore.createIndex('v', 'v')
      }
    })
  }
  static get db() {
    return this._db
  }
  static set db(value) {
    this._db = value
  }
  static get name() {
    return this._name
  }
  static set name(value) {
    this._name = value
  }
}
Db.name = 'vuex'
Db.open()
