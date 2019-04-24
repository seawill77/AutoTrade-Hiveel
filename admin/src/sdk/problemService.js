import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static save(e) {
    let url = `${site.autotrace}/mg/problem`
    let formData = new FormData()
    formData.append('exam.id', e.exam.id)
    formData.append('relateId', e.relateId)
    formData.append('type', e.type)
    formData.append('imgsrc1', e.imgsrc1)
    formData.append('imgsrc2', e.imgsrc2)
    formData.append('imgsrc3', e.imgsrc3)
    formData.append('imgsrc4', e.imgsrc4)
    formData.append('remark', e.remark)
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static delete(e) {
    let url = `${site.autotrace}/mg/problem/${e.id}`
    let options = {
      method: 'DELETE',
    }
    return fetchUtil.run(url, options)
  }

  static update(e) {
    let url = `${site.autotrace}/mg/problem/${e.id}`
    let formData = new FormData()
    formData.append('exam.id', e.exam.id)
    formData.append('relateId', e.relateId)
    formData.append('type', e.type)
    formData.append('imgsrc1', e.imgsrc1)
    formData.append('imgsrc2', e.imgsrc2)
    formData.append('imgsrc3', e.imgsrc3)
    formData.append('imgsrc4', e.imgsrc4)
    formData.append('remark', e.remark)
    let options = {
      method: 'PUT',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }

  static loadById(e) {
    let url = `${site.autotrace}/mg/problem/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static count() {
    let url = `${site.autotrace}/mg/problem/count`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static load(filter) {
    let url = `${site.autotrace}/mg/problem?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static loadByVehicle(filter, vehicle) {
    let url = `${site.autotrace}/mg/vehicle/${vehicle.id}/problem?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static countByInspection(filter, inspection) {
    let url = `${site.autotrace}/mg/inspection/${inspection.id}/problem/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static loadByInspection(filter, inspection) {
    let url = `${site.autotrace}/mg/inspection/${inspection.id}/problem?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }

  static countByIssue(filter, issue) {
    let url = `${site.autotrace}/mg/issue/${issue.id}/problem/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static loadByIssue(filter, issue) {
    let url = `${site.autotrace}/mg/issue/${issue.id}/problem?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
