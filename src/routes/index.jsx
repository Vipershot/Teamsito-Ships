import { createBrowserRouter } from 'react-router-dom'
import { About, Error, Home, ShipsView, AddShipView } from '../views/index'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/ships',
    element: <ShipsView />
  },
  {
    path: '/add-ship',
    element: <AddShipView />
  }
])

export default Router
