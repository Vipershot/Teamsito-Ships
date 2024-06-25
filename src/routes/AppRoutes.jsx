import { Routes, Route, Navigate } from 'react-router-dom';
import {
    Error,
    DashboardView,
    ShipsView,
    AddShipView,
    UpdateShipView,
    UsersView
} from '../views/index'
import App from '../App';
import { BeachesProvider } from '../context/BeachesContext'
function AppRoutes() {
    return (
        <BeachesProvider>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="ships">
                        <Route index element={<ShipsView />} />
                        <Route path=":id" element={<UpdateShipView />} />
                        <Route path="create" element={<AddShipView />} />
                    </Route>
                    <Route path="beaches">
                        <Route index element={<ShipsView />} />
                        <Route path=":id" element={<UpdateShipView />} />
                        <Route path="create" element={<AddShipView />} />
                    </Route>
                    <Route path="users">
                        <Route index element={<UsersView />} />
                    </Route>
                </Route>
                <Route path='*' element={<Navigate to="/ships" />} />
            </Routes>
        </BeachesProvider>
    );
}

export default AppRoutes;