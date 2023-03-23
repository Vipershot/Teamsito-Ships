import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'
import { UpdateForm } from '../../molecules'
import { useAxios } from '../../../hooks/useAxios'

export const UpdateShip = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { getItem, updateItem } = useAxios(`api/ship/${id}`)
  const [item, setItem] = useState(null)
  const sendPost = async (req, file) => {
    const form = new FormData()
    form.append('shipName', req.shipName)
    form.append('shipModel', req.shipModel)
    form.append('shipColor', req.shipColor)
    form.append('shipYear', req.shipYear)
    form.append('image', file)

    const res = await updateItem(form)

    if (res.data) {
      Swal.fire({
        title: `Update Ship ${req.shipName}`,
        text: 'Ship update successfully',
        icon: 'success',
        timer: 2000
      })
      navigate('/ships')
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Ship update error',
        icon: 'error',
        timer: 2000
      })
    }
  }
  useEffect(() => {
    if (id) {
      getItem().then(({ data }) => setItem(data))
    }
  }, [])

  return (
    <>
      <UpdateForm sendPost={sendPost} ship={item} />
    </>
  )
}
