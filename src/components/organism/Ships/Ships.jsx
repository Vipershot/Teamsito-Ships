import { useAxios } from '../../../hooks/useAxios'
import { useEffect, useState } from 'react'
import { TableShips } from '../../molecules/TableShips/TableShips'
import { getShips } from '../../../service/shipsService'
export const Ships = () => {
  const { loading } = useAxios('api/ship')
  const [dataShips, setDataShips] = useState([]);
  const getData = async () => {
    const { ship } = await getShips()
    const res = ship.map(item => {
      return {
        name: item.shipName,
        calories: item.shipModel,
        fat: item.shipColor,
        carbs: item.shipYear,
        protein: item.shipModel,
        id: item._id,
        img: item.image.imageUrl
      }
    })
    setDataShips(res)
  }

  useEffect(() => {
    getData()
  }, []);
  return (
    <>
      {loading ? (
        <p>Cargando</p>
      ) : (
        <>
          <TableShips data={dataShips} />
        </>
      )}
    </>
  )
}
