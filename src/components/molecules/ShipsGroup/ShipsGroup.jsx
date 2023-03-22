import React from 'react'
export const ShipsGroup = ({ ships }) => {
  return (
    <div>
      {ships?.map(({ _id, image, shipName, shipModel }) => (
        <li key={_id}>
          {shipName}
          <img src={image.imageUrl} alt={shipModel} />
        </li>
      ))}
    </div>
  )
}
