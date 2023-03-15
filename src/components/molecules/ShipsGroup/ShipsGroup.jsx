import React from 'react'

export const ShipsGroup = ({ ships }) => {
  return (
    <div>
      {ships?.map(ship => (
        <li key={ship._id}>{ship.shipName}</li>
      ))}
    </div>
  )
}
