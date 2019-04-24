import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static save(e) {
    let url = `${site.autotrace}/mg/plan`
    let formData = new FormData()
    formData.append('day', e.day)
    formData.append('vehicle.id', e.vehicle.id)
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static delete(e) {
    let url = `${site.autotrace}/mg/plan/${e.id}`
    let options = {
      method: 'DELETE',
    }
    return fetchUtil.run(url, options)
  }

  static update(e) {
    let url = `${site.autotrace}/mg/plan/${e.id}`
    let formData = new FormData()
    formData.append('day', e.day)
    formData.append('vehicle.id', e.vehicle.id)
    let options = {
      method: 'PUT',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static loadById(e) {
    let url = `${site.autotrace}/mg/plan/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static count(filter) {
    let url = `${site.autotrace}/mg/plan/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static load(filter) {
    let url = `${site.autotrace}/mg/plan?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static loadByVehicle(filter, vehicle) {
    let url = `${site.autotrace}/mg/plan/vehicle/${vehicle.id}?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
