import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { About, Error } from './index'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: '/about',
    element: <About />
  }
])

export default Router
