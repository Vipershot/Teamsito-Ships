import { ShipsGroup } from '../../molecules'
import { useAxios } from '../../../hooks/useAxios'

export const Ships = () => {
  const { data, loading } = useAxios('api/ship')
  return <>{loading ? <p>Error</p> : <ShipsGroup ships={data.ship} />}</>
}
