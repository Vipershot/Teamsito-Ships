import axios from 'axios'
export const requests = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`
})

export const authAxios = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}api/auth`
})

requests.defaults.headers.common['Content-Type'] = 'multipart/form-data'
