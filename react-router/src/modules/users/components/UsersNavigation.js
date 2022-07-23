import { Link } from 'react-router-dom';
import React from 'react';

function UsersNavigation() {
    return (
        <div>
            <Link to="list">List </Link> |<Link to="new">Add new </Link> |
        </div>
    );
}

export default UsersNavigation;
