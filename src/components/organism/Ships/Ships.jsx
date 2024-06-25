import { useContext, useEffect } from 'react'
import { TableShips } from '../../molecules/TableShips/TableShips'
import { BeachesContext } from '../../../context/BeachesContext';

export const Ships = () => {
  const { playas } = useContext(BeachesContext);

  return (
    <>
      <TableShips data={playas} />
    </>
  )
}
