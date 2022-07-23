import React, { useEffect, useState } from 'react';

import Loader from '../../common/components/Loader';
import UsersListItem from './UsersListItem';
import { getUsersList } from '../services/usersService';
import useUsersList from '../hooks/useUsersList';

//
function UsersList() {
    const { data: list, isLoaded, error, fetchList } = useUsersList();

    return (
        <>
            {error && <div className="error">{error.toString()}</div>}

            {!isLoaded && <Loader />}
            <button onClick={fetchList}>Reload list</button>
            <ul>
                {list.map((user) => (
                    <UsersListItem key={user.id} user={user} />
                ))}
            </ul>
        </>
    );
}

export default UsersList;
