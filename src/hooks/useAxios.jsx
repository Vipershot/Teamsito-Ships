import { useState, useEffect } from 'react'
import { requests } from '../utils/axiosCreate'
export const useAxios = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    requests
      .get(url)
      .then(({ data }) => {
        setLoading(true)
        setData(data)
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    data,
    loading
  }
}
