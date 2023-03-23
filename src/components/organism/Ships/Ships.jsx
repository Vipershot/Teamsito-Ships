import { ShipsGroup, PanelControl } from '../../molecules'
import { useAxios } from '../../../hooks/useAxios'
import { useState } from 'react'

export const Ships = () => {
  const { data, loading, deleteItem } = useAxios('api/ship')
  const handleDelete = id => deleteItem(id)
  const [panel, setPanel] = useState(false)
  const handlePanel = newState => setPanel(newState)

  return (
    <>
      {loading ? (
        <p>Error</p>
      ) : (
        <>
          <PanelControl handlePanel={handlePanel} />
          <ShipsGroup
            ships={data.ship}
            handles={panel}
            handleDelete={handleDelete}
          />
        </>
      )}
    </>
  )
}
