import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static save(e) {
    let url = `${site.autotrace}/mg/inspection`
    let formData = new FormData()
    formData.append('person.id', e.person.id)
    formData.append('vehicle.id', e.vehicle.id)
    formData.append('name', e.name)
    formData.append('content', e.content)
    formData.append('date', e.date)
    formData.append('odometer', e.odometer)
    formData.append('tax', e.tax)
    formData.append('status', e.status)
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static delete(e) {
    let url = `${site.autotrace}/mg/inspection/${e.id}`
    let options = {
      method: 'DELETE',
    }
    return fetchUtil.run(url, options)
  }

  static update(e) {
    let url = `${site.autotrace}/mg/inspection/${e.id}`
    let formData = new FormData()
    formData.append('person.id', e.person.id)
    formData.append('vehicle.id', e.vehicle.id)
    formData.append('name', e.name)
    formData.append('content', e.content)
    formData.append('date', e.date)
    formData.append('odometer', e.odometer)
    formData.append('tax', e.tax)
    formData.append('status', e.status)
    let options = {
      method: 'PUT',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static loadById(e) {
    let url = `${site.autotrace}/mg/inspection/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static count(filter) {
    let url = `${site.autotrace}/mg/inspection/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static load(filter) {
    let url = `${site.autotrace}/mg/inspection?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static loadByDriver(filter, driver) {
    let url = `${site.autotrace}/mg/driver/${driver.id}/inspection?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static countByInspection(filter, vehicle) {
    let url = `${site.autotrace}/mg/vehicle/${vehicle.id}/inspection/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static countByVehicle(filter, vehicle) {
    let url = `${site.autotrace}/mg/vehicle/${vehicle.id}/inspection/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static loadByVehicle(filter, vehicle) {
    let url = `${site.autotrace}/mg/vehicle/${vehicle.id}/inspection?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
