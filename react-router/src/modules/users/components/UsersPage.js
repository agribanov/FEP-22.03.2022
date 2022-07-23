import { Outlet, Route, Routes } from 'react-router-dom';

import React from 'react';
import UsersList from './UsersList';
import UsersNavigation from './UsersNavigation';

function UsersPage() {
    return (
        <>
            <UsersNavigation />
            <Outlet />
        </>
    );
}

export default UsersPage;
