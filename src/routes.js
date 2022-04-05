import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { useState } from 'react';
import SingIn from './pages/SingIn';
import Main from './pages/Main';
import Teach from './pages/Teach';


export default function ProjectRoutes() {
    const [id, setId] = useState();
    const [authenticatid, setAuthenticatid] = useState(false);
    function ProtectRoutes({ redirectTo }) {
        return authenticatid ? <Outlet /> : <Navigate to={redirectTo} />
    };

    return (
        <Routes>
            <Route path={'/'} element={<SingIn setAuthenticatid={setAuthenticatid} />} />
            <Route element={<ProtectRoutes redirectTo={'/'} />}>
                <Route path={'/main'} element={<Main setId={setId} setAuthenticatid={setAuthenticatid} />} />
                <Route path={'/teach/:id'} element={<Teach id={id} />} />
            </Route>
        </Routes>
    );
}

