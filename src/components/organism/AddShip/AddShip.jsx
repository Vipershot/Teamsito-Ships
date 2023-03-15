import React from 'react'
import { ShipForm } from '../../molecules'
import { useAxios } from '../../../hooks/useAxios'
export const AddShip = () => {
  const { post } = useAxios('api/ship')
  const sendPost = async req => {
    const data = await post(req)
    console.log(data)
  }
  return (
    <>
      <ShipForm sendPost={sendPost} />
    </>
  )
}
