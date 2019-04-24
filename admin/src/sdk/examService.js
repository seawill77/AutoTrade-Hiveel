import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static save(e) {
    let url = `${site.autotrace}/mg/exam`
    let formData = new FormData()
    formData.append('name', e.name)
    if (e.content) formData.append('content', e.content)
    formData.append('type', e.type)
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }
  static count(filter) {
    let url = `${site.autotrace}/mg/exam/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static load(filter) {
    let url = `${site.autotrace}/mg/exam?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
