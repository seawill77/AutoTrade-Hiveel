import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static save(e) {
    let url = `${site.autotrace}/mg/reminder`
    let formData = new FormData()
    formData.append('vehicle.id', e.vehicle.id)
    formData.append('content', e.content)
    formData.append('type', e.type)
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static delete(e) {
    let url = `${site.autotrace}/mg/reminder/${e.id}`
    let options = {
      method: 'DELETE',
    }
    return fetchUtil.run(url, options)
  }

  static update(e) {
    let url = `${site.autotrace}/mg/reminder/${e.id}`
    let formData = new FormData()
    formData.append('vehicle.id', e.vehicle.id)
    formData.append('content', e.content)
    formData.append('type', e.type)
    let options = {
      method: 'PUT',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static loadById(e) {
    let url = `${site.autotrace}/mg/reminder/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static count(filter) {
    let url = `${site.autotrace}/mg/reminder/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static load(filter) {
    let url = `${site.autotrace}/mg/reminder?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static loadByVehicle(filter, vehicle) {
    let url = `${site.autotrace}/mg/vehicle/${vehicle.id}/reminder?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
