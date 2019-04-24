import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static save(e) {
    let url = `${site.autotrace}/mg/personGroup`
    let formData = new FormData()
    formData.append('name', e.name)
    formData.append('dashboard', e.dashboard || 'NULL')
    formData.append('exam', e.exam || 'NULL')
    formData.append('inspection', e.inspection || 'NULL')
    formData.append('invoice', e.invoice || 'NULL')
    formData.append('issue', e.issue || 'NULL')
    formData.append('notification', e.notification || 'NULL')
    formData.append('person', e.person || 'NULL')
    formData.append('setting', e.setting || 'NULL')
    formData.append('vehicle', e.vehicle || 'NULL')
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static delete(e) {
    let url = `${site.autotrace}/mg/personGroup/${e.id}`
    let options = {
      method: 'DELETE',
    }
    return fetchUtil.run(url, options)
  }

  static update(e) {
    let url = `${site.autotrace}/mg/personGroup/${e.id}`
    let formData = new FormData()
    formData.append('name', e.name)
    formData.append('content', e.content)
    let options = {
      method: 'PUT',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static loadById(e) {
    let url = `${site.autotrace}/mg/personGroup/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static count(filter) {
    let url = `${site.autotrace}/mg/personGroup/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static load(filter) {
    let url = `${site.autotrace}/mg/personGroup?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
