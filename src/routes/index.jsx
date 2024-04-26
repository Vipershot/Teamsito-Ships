// import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
// const Router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: '/',
//         element: <DashboardView />
//       },
//       {
//         path: '/ships',
//         element: <ShipsView />,
//         children: [
//           {
//             path: ':id', // Parámetro de ruta para identificar un barco específico
//             element: <UpdateShipView />, // Componente para mostrar detalles de un barco
//           },
//           // Puedes agregar más subrutas aquí
//         ],
//       },

//       {
//         path: '/add-ship',
//         element: <AddShipView />
//       }
//     ]
//   }
// ])

// export default Router


import { Routes, Route } from 'react-router-dom';
import {
  Error,
  DashboardView,
  ShipsView,
  AddShipView,
  UpdateShipView
} from '../views/index'
function AppRoutes() {
  return (

    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<DashboardView />} />
        <Route path="ships">
          <Route index element={<ShipsView />} />
          <Route path=":id" element={<UpdateShipView />} />
          <Route path="create" element={<AddShipView />} />
        </Route>
      </Route>
    </Routes>

  );
}

export default AppRoutes;