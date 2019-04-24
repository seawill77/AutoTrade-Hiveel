import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static save(e) {
    let url = `${site.autotrace}/mg/vehicle`
    let formData = new FormData()
    formData.append('group.id', e.group.id)
    formData.append('name', e.name)
    formData.append('status', e.status)
    formData.append('vin', e.vin)
    formData.append('plate', e.plate)
    formData.append('rental', e.rental)
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static delete(e) {
    let url = `${site.autotrace}/mg/vehicle/${e.id}`
    let options = {
      method: 'DELETE',
    }
    return fetchUtil.run(url, options)
  }

  static update(e) {
    let url = `${site.autotrace}/mg/vehicle/${e.id}`
    let formData = new FormData()
    formData.append('group.id', e.group.id)
    formData.append('name', e.name)
    formData.append('status', e.status)
    formData.append('vin', e.vin)
    formData.append('plate', e.plate)
    formData.append('rental', e.rental)
    let options = {
      method: 'PUT',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static loadById(e) {
    let url = `${site.autotrace}/mg/vehicle/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static count(filter) {
    let url = `${site.autotrace}/mg/vehicle/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static load(filter) {
    let url = `${site.autotrace}/mg/vehicle?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static loadByVehicleGroup(filter, vehicleGroup) {
    let url = `${site.autotrace}/mg/vehicleGroup/${vehicleGroup.id}/vehicle?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
