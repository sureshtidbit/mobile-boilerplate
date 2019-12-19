import { APIURL } from '../../env'
export const GET = (url) => {
    return fetch(APIURL + url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then((response) => response.json())
        .then((responseData) => {
            return responseData
        })
};
export const POST = (url, Body) => {
    return fetch(APIURL + url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: Body
    }).then((response) => response.json())
        .then((responseData) => {
            return responseData
        })
};

export const FormPostAPI = (url, Body) => {
    return fetch(APIURL + url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        credentials: 'include',
        body: Body
    }).then((response) => response.json())
        .then((responseData) => {
            return responseData
        })
};