let APIURL = 'https://edan-power.tidbitlab.com/api/'
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
        body: JSON.stringify(Body)
    }).then((response) => response.json())
        .then((responseData) => {
            return responseData
        })
};