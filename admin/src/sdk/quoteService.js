import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static save(e) {
    let url = `${site.autotrace}/mg/quote`
    let formData = new FormData()
    formData.append('problem.id', e.problem.id)
    formData.append('name', e.name)
    formData.append('labor', e.labor)
    formData.append('part', e.part)
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static delete(e) {
    let url = `${site.autotrace}/mg/quote/${e.id}`
    let options = {
      method: 'DELETE',
    }
    return fetchUtil.run(url, options)
  }

  static update(e) {
    let url = `${site.autotrace}/mg/quote/${e.id}`
    let formData = new FormData()
    formData.append('problem.id', e.problem.id)
    formData.append('name', e.name)
    formData.append('labor', e.labor)
    formData.append('part', e.part)
    let options = {
      method: 'PUT',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static loadById(e) {
    let url = `${site.autotrace}/mg/quote/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static count(filter) {
    let url = `${site.autotrace}/mg/quote/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static load(filter) {
    let url = `${site.autotrace}/mg/quote?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static loadByVehicle(filter, vehicle) {
    let url = `${site.autotrace}/mg/vehicle/${vehicle.id}/quote?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static loadByInspection(filter, inspection) {
    let url = `${site.autotrace}/mg/inspection/${inspection.id}/quote?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static loadByIssue(filter, issue) {
    let url = `${site.autotrace}/mg/issue/${issue.id}/quote?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static loadByProblem(filter, problem) {
    let url = `${site.autotrace}/mg/problem/${problem.id}/quote?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static loadCostByOwnVehicle(filter) {
    let url = `${site.autotrace}/mg/vehicle/own/quote/cost?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static loadCostByRentalVehicle(filter) {
    let url = `${site.autotrace}/mg/vehicle/rental/quote/cost?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static loadCostByVehicle(filter, vehicle) {
    let url = `${site.autotrace}/mg/vehicle/${vehicle.id}/quote/cost?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static loadCost(filter) {
    let url = `${site.autotrace}/mg/quote/cost?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
