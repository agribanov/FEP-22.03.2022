import { API_URL } from '../../../config';

export function getUsersList() {
    return fetch(API_URL).then((res) => res.json());
}

export function getUserDetails(id) {
    return fetch(API_URL + id).then((res) => res.json());
}
