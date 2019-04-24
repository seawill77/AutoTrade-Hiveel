const isDev = process.env.NODE_ENV !== 'production'

const prod = {
  autotrace: 'http://172.168.2.16:9981/autotrace/',
  auth: 'http://172.168.2.16:9980/auth',
}

const dev = {
  autotrace: 'http://172.168.2.16:9981/autotrace',
  auth: 'http://172.168.2.16:9980/auth',
  upload: 'http://172.168.2.16:9982/upload',
}

const host = { ...prod, ...(isDev ? dev : {}) }

const site = {
  autotrace: host.autotrace,
  auth: host.auth,
}

export default site
