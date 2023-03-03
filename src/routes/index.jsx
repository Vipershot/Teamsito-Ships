import { createBrowserRouter } from 'react-router-dom'
import { About, Error, Home } from '../views/index'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/about',
    element: <About />
  }
])

export default Router
