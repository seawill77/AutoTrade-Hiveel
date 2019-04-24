/**
 * 有些模块需要提出来，放在this，或者页面中方便调用的
 */
import storage from '@/sdk/util/storage'
import site from '@/sdk/config/site'
import elvalid from './elvalid'
export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$storage', { value: storage })
    Object.defineProperty(Vue.prototype, '$img', { value: site.autotrace })
    Object.defineProperty(Vue.prototype, '$elvalid', { value: elvalid })
  },
}
