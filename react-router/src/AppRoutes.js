import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import React from 'react';
import UserDetails from './modules/users/components/UserDetails';
import UsersList from './modules/users/components/UsersList';
import UsersPage from './modules/users/components/UsersPage';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="users" element={<UsersPage />}>
                        <Route path="list" element={<UsersList />} />
                        <Route path="list/:id" element={<UserDetails />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
