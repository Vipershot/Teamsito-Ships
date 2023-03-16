import React from 'react'
import { ShipForm } from '../../molecules'
import { useAxios } from '../../../hooks/useAxios'
export const AddShip = () => {
  const { post } = useAxios('api/ship')
  const sendPost = async (req, file) => {
    const form = new FormData()
    form.append('shipName', req.shipName)
    form.append('shipModel', req.shipModel)
    form.append('shipColor', req.shipColor)
    form.append('shipYear', req.shipYear)
    form.append('image', file)

    await post(form)
  }
  return (
    <>
      <ShipForm sendPost={sendPost} />
    </>
  )
}
