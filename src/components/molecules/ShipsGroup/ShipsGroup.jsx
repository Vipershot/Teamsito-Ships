import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from '../../atoms'
export const ShipsGroup = ({ ships, handles, handleDelete }) => {
  return (
    <div>
      {ships?.map(({ _id, image, shipName, shipModel }) => (
        <li key={_id}>
          {shipName}
          <Image src={image.imageUrl} alt={shipModel} />
          {handles && (
            <>
              <button onClick={() => handleDelete(_id)}>Delete</button>{' '}
              <Link to={`/ships/${_id}`}>Update</Link>
            </>
          )}
        </li>
      ))}
    </div>
  )
}
