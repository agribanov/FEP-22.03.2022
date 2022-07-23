import { Link } from 'react-router-dom';
import React from 'react';

function Heading() {
    return (
        <div>
            App Bar = <Link to="/users/list">Users</Link>
        </div>
    );
}

export default Heading;
