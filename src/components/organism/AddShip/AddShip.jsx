import React from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { ShipForm } from '../../molecules'
import { useAxios } from '../../../hooks/useAxios'

export const AddShip = () => {
  const { post } = useAxios('api/ship')
  const navigate = useNavigate()
  const sendPost = async (req, file) => {
    const form = new FormData()
    form.append('shipName', req.shipName)
    form.append('shipModel', req.shipModel)
    form.append('shipColor', req.shipColor)
    form.append('shipYear', req.shipYear)
    form.append('image', file)

    const res = await post(form)

    if (res.data) {
      Swal.fire({
        title: `New Ship ${req.shipName}`,
        text: 'Ship created successfully',
        icon: 'success',
        timer: 2000
      })
      navigate('/ships')
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Ship created error',
        icon: 'error',
        timer: 2000
      })
    }
  }
  return (
    <>
      <ShipForm sendPost={sendPost} />
    </>
  )
}
