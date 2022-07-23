import { useEffect, useState } from 'react';

import { getUserDetails } from '../services/usersService';
import useAsync from '../../common/hooks/useAsync';

export default function useUser(id) {
    const { run, ...state } = useAsync(getUserDetails, {});

    useEffect(() => {
        run(id);
    }, [id]);

    return { refreshDetails: run, ...state };
}
