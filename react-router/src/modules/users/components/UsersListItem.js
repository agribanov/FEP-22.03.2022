import { Link } from 'react-router-dom';
import React from 'react';

function UsersListItem({ user }) {
    return (
        <li>
            <Link to={user.id}>{user.name}</Link>
        </li>
    );
}

export default UsersListItem;
