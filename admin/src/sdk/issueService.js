import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static save(e) {
    let url = `${site.autotrace}/mg/issue`
    let formData = new FormData()
    formData.append('vehicle.id', e.vehicle.id)
    formData.append('driver.id', e.driver.id)
    formData.append('name', e.name)
    formData.append('content', e.content)
    formData.append('date', e.date)
    formData.append('status', e.status)
    formData.append('odometer', e.odometer)
    formData.append('lon', e.lon)
    formData.append('lat', e.lat)
    formData.append('tax', e.tax)
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static delete(e) {
    let url = `${site.autotrace}/mg/issue/${e.id}`
    let options = {
      method: 'DELETE',
    }
    return fetchUtil.run(url, options)
  }

  static update(e) {
    let url = `${site.autotrace}/mg/issue/${e.id}`
    let formData = new FormData()
    formData.append('vehicle.id', e.vehicle.id)
    formData.append('driver.id', e.driver.id)
    formData.append('name', e.name)
    formData.append('content', e.content)
    formData.append('date', e.date)
    formData.append('status', e.status)
    formData.append('odometer', e.odometer)
    formData.append('lon', e.lon)
    formData.append('lat', e.lat)
    formData.append('tax', e.tax)
    let options = {
      method: 'PUT',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static loadById(e) {
    let url = `${site.autotrace}/mg/issue/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static count(filter) {
    let url = `${site.autotrace}/mg/issue/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static load(filter) {
    let url = `${site.autotrace}/mg/issue?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static countByDriver(filter, driver) {
    let url = `${site.autotrace}/mg/driver/${driver.id}/issue/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static loadByDriver(filter, driver) {
    let url = `${site.autotrace}/mg/driver/${driver.id}/issue?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static countByVehicle(filter, vehicle) {
    let url = `${site.autotrace}/mg/vehicle/${vehicle.id}/issue/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static loadByVehicle(filter, vehicle) {
    let url = `${site.autotrace}/mg/vehicle/${vehicle.id}/issue?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
