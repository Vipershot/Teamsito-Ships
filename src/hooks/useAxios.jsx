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

  const post = async req => {
    const data = requests.post(url, req)
    return data
  }
  const getData = async () => {
    const { data } = await requests.get(url)
    setData(data)
  }
  const getItem = async () => {
    try {
      const data = requests.get(url)
      return data
    } catch (error) {
      console.log('error', error)
    }
  }
  const deleteItem = async id => {
    await requests.delete(`${url}/${id}`)
    getData()
  }
  const updateItem = async req => await requests.put(url, req)
  return {
    data,
    loading,
    post,
    getItem,
    deleteItem,
    updateItem
  }
}
