import { Routes, Route, Navigate } from 'react-router-dom';
import {
    Error,
    DashboardView,
    ShipsView,
    AddShipView,
    UpdateShipView
} from '../views/index'
import App from '../App';

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
            <Route path='/*' element={<Navigate to="/" />} />
        </Routes>

    );
}

export default AppRoutes;