import React from 'react'
import { Input } from '../../atoms'
export const ShipsGroup = ({ ships }) => {
  return (
    <div>
      {ships?.map(ship => (
        <li key={ship._id}>{ship.shipName}</li>
      ))}
    </div>
  )
}
