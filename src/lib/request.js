import { clientApi } from '../axios/index'

export const postData = (url, params, timeout = 600000) => {
      return clientApi.post(url, params, { timeout })
}

export const getData = (url, params, timeout = 600000) => {
      return clientApi.get(url, { params, timeout })
}