import axios from 'axios'
export const requests = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`
})

export const authAxios = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}api/auth`
})

requests.defaults.headers.common['Content-Type'] = 'multipart/form-data'
requests.interceptors.request.use(function (config) {
  // Obtener el token del almacenamiento local o de donde lo tengas almacenado
  const token = localStorage.getItem('token');
  // Si el token existe, añadirlo al encabezado de autorización
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  // Manejar errores aquí si es necesario
  return Promise.reject(error);
});
