import { AsyncStorage } from "react-native";
let APIURL = 'https://edan-power.tidbitlab.com/api/isLoggedInw'
export const getUserInfo = () => {
    return fetch(APIURL, {
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
        // .catch(function (error) {
        //     return error
        // })
};