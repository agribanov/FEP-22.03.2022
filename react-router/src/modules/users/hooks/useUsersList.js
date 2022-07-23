import { useCallback, useEffect, useState } from 'react';

import { getUsersList } from '../services/usersService';
import useAsync from '../../common/hooks/useAsync';

export default function useUsersList() {
    const { run, ...state } = useAsync(getUsersList, []);

    useEffect(() => {
        run();
    }, []);

    return { ...state, fetchList: run };
}
