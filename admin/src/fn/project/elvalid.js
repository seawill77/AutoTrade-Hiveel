export default class elvalid {
  static check(rule, value, callback) {
    setTimeout(() => { callback() }, 1000)
  }
  static checkVal(rule, value, callback) {
    if (value === '') {
      callback(new Error('Please input Phone number!'))
    }
    setTimeout(() => { callback() }, 1000)
  }
  static checkPhone(rule, value, callback) {
    // let phoneRe = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
    let phoneRe = /^1?[2-9]\d{2}[2-9]\d{2}\d{4}$/
    if (!phoneRe.test(value)) {
      callback(new Error('Please input phone number!'))
    }
    setTimeout(() => {
      callback()
    }, 1000)
  }
  static checkEmail(rule, value, callback) {
    let emailRe = /\S+@\S+\.\S+/
    if (!(emailRe.test(String(value).toLowerCase()))) {
      callback(new Error('Please input valide email'))
    }
    setTimeout(() => {
      callback()
    }, 1000)
  }
  static checkPhoneOrEmail(rule, value, callback) {
    let phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/
    let emailRe = /\S+@\S+\.\S+/
    if (!phoneRe.test(value) && !emailRe.test(String(value).toLowerCase())) {
      callback(new Error('Please input correct email or phone number'))
    }
    setTimeout(() => {
      callback()
    }, 1000)
  }
}
