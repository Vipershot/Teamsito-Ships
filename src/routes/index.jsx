import { createBrowserRouter } from 'react-router-dom'
import { Error, DashboardView, ShipsView, AddShipView } from '../views/index'
import App from '../App'
const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <DashboardView />
      },
      {
        path: '/ships',
        element: <ShipsView />
      },
      {
        path: '/add-ship',
        element: <AddShipView />
      }
    ]
  }
])

export default Router
