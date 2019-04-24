import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static update(e) {
    let url = `${site.autotrace}/mg/vehicleDriverRelate/${e.id}`
    let formData = new FormData()
    formData.append('person.id', e.person.id)
    formData.append('vehicle.id', e.vehicle.id)
    formData.append('offDate', e.offDate)
    formData.append('onDate', e.onDate)
    let options = {
      method: 'PUT',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static loadById(e) {
    let url = `${site.autotrace}/mg/vehicleDriverRelate/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static count(filter) {
    let url = `${site.autotrace}/mg/vehicleDriverRelate/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static load(filter) {
    let url = `${site.autotrace}/mg/vehicleDriverRelate?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static loadByDriver(filter, driver) {
    let url = `${site.autotrace}/mg/driver/${driver.id}/vehicleDriverRelate?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static loadByVehicle(filter, vehicle) {
    let url = `${site.autotrace}/mg/vehicle/${vehicle.id}/vehicleDriverRelate?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
