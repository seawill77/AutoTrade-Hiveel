import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static save(e) {
    let url = `${site.autotrace}/mg/person`
    let formData = new FormData()
    formData.append('personGroup.id', e.personGroup.id)
    formData.append('username', e.username)
    formData.append('password', e.password)
    formData.append('firstName', e.firstName)
    formData.append('lastName', e.lastName)
    formData.append('phone', e.phone)
    formData.append('email', e.email)
    if (e.driverLicense) formData.append('driverLicense', e.driverLicense)
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static delete(e) {
    let url = `${site.autotrace}/mg/person/${e.id}`
    let options = {
      method: 'DELETE',
    }
    return fetchUtil.run(url, options)
  }

  static update(e) {
    let url = `${site.autotrace}/mg/person/${e.id}`
    let formData = new FormData()
    formData.append('groupId', e.groupId)
    formData.append('username', e.username)
    formData.append('password', e.password)
    formData.append('firstName', e.firstName)
    formData.append('lastName', e.lastName)
    formData.append('phone', e.phone)
    formData.append('email', e.email)
    if (e.driverLicense) formData.append('driverLicense', e.driverLicense)
    let options = {
      method: 'PUT',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static loadById(e) {
    let url = `${site.autotrace}/mg/person/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static me() {
    let url = `${site.autotrace}/mg/me`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static count(filter) {
    let url = `${site.autotrace}/mg/person/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static load(filter) {
    let url = `${site.autotrace}/mg/person?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
