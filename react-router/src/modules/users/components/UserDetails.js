import Loader from '../../common/components/Loader';
import React from 'react';
import { useParams } from 'react-router-dom';
import useUser from '../hooks/useUser';

function UserDetails() {
    const params = useParams();
    const { data: user, isLoaded } = useUser(params.id);

    return (
        <div>
            {!isLoaded && <Loader />}
            <h1>UserDetails</h1>
            <strong>Name: </strong>
            {user.name} {user.surname}
            <br />
            <strong>Email: </strong>
            {user.email}
        </div>
    );
}

export default UserDetails;
