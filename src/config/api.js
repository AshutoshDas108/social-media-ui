import axios from "axios";

// to be replaced after deployed url afterwards
export const API_BASE_URL = "http://localhost:5454";

//the key is from register action where we were storing jwt with this key name
const jwtToken = localStorage.getItem('jwt');

export const api = axios.create({baseURL: API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json"
    }
});