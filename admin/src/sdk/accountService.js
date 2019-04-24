import fetchUtil from './util/fetchUtil'
import site from './config/site'
import storage from './util/storage'

export default class accountService {
  static updatePassword(e) {
    let url = `${site.auth}/me/password`
    let formData = new FormData()
    formData.append('password', e.password)
    formData.append('oldPassword', e.oldPassword)
    let options = {
      method: 'PUT',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }
  static login(e) {
    let url = `${site.auth}/login`
    let formData = new FormData()
    formData.append('username', e.username)
    formData.append('password', e.password)
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options).then(rest => {
      if (rest.code !== 'SUCCESS') return rest
      storage.set('token', rest.data.token)
      storage.set('refreshToken', rest.data.refreshToken)
      this.keepLogin()
      return rest
    })
  }

  static logout() {
    let url = `${site.auth}/logout`
    let formData = new FormData()
    formData.append('token', storage.get('token'))
    formData.append('refreshToken', storage.get('refreshToken'))
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options).then(rest => {
      storage.remove('token')
      storage.remove('refreshToken')
      this._refreshTimer = null
      return rest
    })
  }
  static async keepLogin() {
    this._refreshTimer = storage.get('refreshToken') ? setTimeout(() => this.refreshToken(), refreshTime) : null
  }

  static refreshToken() {
    let url = `${site.auth}/token/refresh`
    let formData = new FormData()
    formData.append('refreshToken', storage.get('refreshToken'))
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options).then(rest => {
      if (rest.code !== 'SUCCESS') return rest
      storage.set('token', rest.data.token)
      storage.set('refreshToken', rest.data.refreshToken)
      this.keepLogin()
      return rest
    })
  }

  static get refreshTimer() {
    return this._refreshTimer
  }
  static set refreshTimer(value) {
    this._refreshTimer = value
  }
}

accountService.keepLogin()

const refreshTime = 1000 * 60 * 4
