import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static loadPlatformById(e) {
    let url = `${site.authtrace}/mg/invoicePlatform/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static loadExamById(e) {
    let url = `${site.authtrace}/mg/invoiceExam/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static countPlatform(filter) {
    let url = `${site.authtrace}/mg/invoicePlatform/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static loadPlatform(filter) {
    let url = `${site.authtrace}/mg/invoicePlatform?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static countExam(filter) {
    let url = `${site.authtrace}/mg/invoiceExam/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static loadExam(filter) {
    let url = `${site.authtrace}/mg/invoiceExam?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
