import { createBrowserRouter } from 'react-router-dom'
import { About, Error, Home, ShipsView } from '../views/index'

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
  }
])

export default Router
